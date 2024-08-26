import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import imghome from '../assets/images/imghome.png';
import tap from '../assets/images/tap.png';

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/quiz')
    }

    return (
        <>
            <div className="vocational-quiz-wrapper">
                <div className="top-section">
                    <div className="top-text-container">
                        <h1>Entenda o seu perfil e encontre o curso certo para você!</h1>
                    </div>
                    {/* If you have an image: <img src="path_to_image" alt="Profile" /> */}
                    {/* For placeholder purposes, here's an example with a div */}
                    <div className="image-placeholder">
                        <img src={imghome} alt="Profile" />
                    </div>
                </div>

                <div className="vocational-quiz-container">
                    <div className="text-section">
                        <h1 className="title">
                            Quiz vocacional <span className="gratis-badge">Grátis</span>
                        </h1>
                        <p className="description">
                            Descobrir sua vocação pode ser uma viagem e tanto, cheia de descobertas. Nosso Teste Vocacional é tipo uma bússola para te ajudar a navegar por esse mar de possibilidades. Criamos perguntas especiais que vão te ajudar a entender melhor suas paixões, habilidades e, claro, a encontrar aquela carreira que parece que foi feita sob medida pra você.
                            <br></br>
                            <br></br>
                            Não é só um quiz; é uma jornada de autoconhecimento que conjuga seus interesses, paixões e potencial. Aqui na Alcides Maya, a gente leva a sério cada sonho, cada aspiração. Estamos aqui para te ajudar a brilhar, a encontrar seu lugar no mundo profissional, sendo exatamente quem você é.
                            <br></br>
                            <br></br>
                            Pronto para descobrir a área profissional mais adequada para o seu perfil? Comece o teste e aproxime-se da carreira dos seus sonhos
                            {/* Additional description text */}
                        </p>
                    </div>
                    <div className="comecar-button-section">
                        <button className="comecar-button"
                            onClick={handleClick}
                        >
                            <div style={{ width: '70%', alignContent: 'center', margin: 'auto auto' }}>
                                <p style={{ fontSize: '2.2rem' }}>Clique aqui para começar</p>
                                <img src={tap} alt="Click" />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="how-to-section">
                    <h2 className="how-to-title">Como fazer o teste?</h2>
                    {/* List of steps */}
                    <p>Encontre um cantinho tranquilo, sem distrações.</p>
                    <ol className="steps-list">
                        <li>Seja sincero nas respostas - aqui, a honestidade é sua melhor amiga.</li>
                        <li>Não precisa quebrar a cabeça nas respostas. Vá com o que vem à mente primeiro.</li>
                        <li>Se bater aquela dúvida, pense em como você já agiu ou o que já curtiu fazer.</li>
                        <li>Depois de terminar, dê uma olhada nos resultados. Quem sabe não é o início de uma nova fase?</li>
                    </ol>
                </div>
            </div>
            <div class="about-container">
                <h1>Sobre a Alcides Maya</h1>
                <p>Imagine um lugar onde, há mais de 50 anos, sonhos se transformam em realidade profissional. Esse lugar é a Escola Técnica Alcides Maya! Aqui, misturamos prática com teoria, transformando estudantes em profissionais prontos para enfrentar o mercado de trabalho. Nossos professores? Ah, são verdadeiros guias que não só ensinam, mas te inspiram a ir além, a abrir novos horizontes e se conectar com um mercado de trabalho que não para de pulsar.</p>
                <p>Nossos cursos são faróis, iluminando caminhos e abrindo portas para um mundo cheio de oportunidades. No coração de Porto Alegre, não só entregamos diplomas; nós criamos a chave para você abrir as portas do seu futuro profissional. Aqui, cada sonho realizado, cada carreira construída e cada inovação lançada conta uma história. E aí, bora começar a escrever a sua?</p>
            </div>
        </>
    );
};

export default Home;
