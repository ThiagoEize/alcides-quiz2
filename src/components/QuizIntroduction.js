import React from 'react';
import './QuizIntroduction.css';
import { useNavigate } from 'react-router-dom';

const QuizIntroduction = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/quiz/1')
    }
    return (
        <div className="quiz-introduction-container">
            <h2 className="quiz-intro-heading">Pronto para descobrir sua vocação?</h2>
            <p className="quiz-intro-subheading">Vem com a gente, é só seguir esses passos:</p>
            <div className="quiz-intro-steps">
                <p>Encontre um cantinho tranquilo, sem distrações.</p>
                <ol>

                    <li>Seja sincero nas respostas - aqui, a honestidade é sua melhor amiga.</li>
                    <li>Não precisa quebrar a cabeça nas respostas. Vá com o que vem à mente primeiro.</li>
                    <li>Se bater aquela dúvida, pense em como você já agiu ou o que já curtiu fazer.</li>
                    <li>Depois de terminar, dá uma olhada nos resultados. Quem sabe não é o início de uma nova fase?</li>
                </ol>
            </div>
            <div className="quiz-intro-action">
                <h2 className="quiz-action-heading">Pronto para começar?</h2>
                <p>Clique no botão abaixo e embarque nesta jornada de descoberta!</p>
                <button
                    className="quiz-action-button"
                    onClick={handleClick}
                >
                    Ir para o teste</button>
            </div>
        </div>
    );
};

export default QuizIntroduction;
