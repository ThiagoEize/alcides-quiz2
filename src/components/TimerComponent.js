import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    // Calculates the next countdown target time based on whether it's the first count
    const calculateNextTarget = (currentTime, isFirstCount) => {
        let nextHour = currentTime.getHours();
        let minutes = currentTime.getMinutes();

        if (isFirstCount) {
            // Determine the next regular interval (either hh:15, hh:30, hh:45, or hh+1:00)
            let nextInterval = 15;
            let additionalMinutes = nextInterval - (minutes % nextInterval);
            let firstCountdownMinutes = minutes + additionalMinutes;

            if (additionalMinutes < 10) { // If less than 10 minutes until the next interval
                firstCountdownMinutes += 15; // Add an extra 15 minutes
            }

            minutes = firstCountdownMinutes;

            // Check if we've exceeded 60 minutes, adjust hour and minutes accordingly
            if (minutes >= 60) {
                nextHour++;
                minutes %= 60;
            }

            // Handle the midnight transition
            if (nextHour === 24) {
                nextHour = 0;
            }
        } else {
            // Regular interval countdowns every 15 minutes for subsequent counts
            let nextInterval = 15;
            let additionalMinutes = nextInterval - (minutes % nextInterval);
            minutes += additionalMinutes;
            if (minutes >= 60) {
                nextHour++;
                minutes %= 60;
            }
        }

        const newTargetTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), nextHour, minutes, 0, 0);
        return newTargetTime;
    };

    // Initialize or get the target time and whether it is the first count
    const getInitialTime = () => {
        const savedTime = localStorage.getItem('countdownTarget');
        const isFirstCount = localStorage.getItem('isFirstCount') !== 'false'; // Check if first count
        const now = new Date();

        if (savedTime) {
            const targetTime = new Date(parseInt(savedTime));
            if (targetTime > now) {
                return { targetTime, isFirstCount };
            }
        }

        // Calculate initial target time when none is valid
        const newTargetTime = calculateNextTarget(now, true);
        localStorage.setItem('countdownTarget', newTargetTime.getTime().toString());
        localStorage.setItem('isFirstCount', 'true');
        return { targetTime: newTargetTime, isFirstCount: true };
    };

    const calculateTimeLeft = (fromTime) => {
        const now = new Date();
        const difference = fromTime - now;

        if (difference > 0) {
            return {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return {};
    };

    const initial = getInitialTime();
    const [startTime, setStartTime] = useState(initial.targetTime);
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(initial.targetTime));
    const [showFinalMessage, setShowFinalMessage] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const currentTimeLeft = calculateTimeLeft(startTime);

            if (Object.keys(currentTimeLeft).length === 0) {
                setShowFinalMessage(true);
                const newStartTime = calculateNextTarget(new Date(), false);
                localStorage.setItem('countdownTarget', newStartTime.getTime().toString());
                setTimeout(() => {
                    setShowFinalMessage(false);
                    localStorage.setItem('isFirstCount', 'false'); // Ensuring this only runs after the countdown to 0
                    setStartTime(newStartTime);
                    setTimeLeft(calculateTimeLeft(newStartTime));
                }, 3000); // Display the message for 3 seconds
            } else {
                setTimeLeft(currentTimeLeft);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [startTime]);

    return (
        <div className="countdown-timer">
            {showFinalMessage ? (
                <div className="final-message">Ultimos 15 minutos para fechar a oferta!</div>
            ) : (
                <>
                    <span className="countdown-text">Oferta valida por:</span>
                    <div className="number-box">{timeLeft.hours}h</div>
                    <span className="colon">:</span>
                    <div className="number-box">{timeLeft.minutes}m</div>
                    <span className="colon">:</span>
                    <div className="number-box">{timeLeft.seconds}s</div>
                </>
            )}
        </div>
    );
};

export default CountdownTimer;
