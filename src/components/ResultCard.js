import React from "react";
import "./ResultCard.css"; // Importing the CSS file
import { useParams } from "react-router-dom";
// import visionario from '../assets/gifs/visionario.gif';
// import criador from '../assets/gifs/criador.gif';
// import estrategista from '../assets/gifs/estrategista2.gif';
// import guardiao from '../assets/gifs/guardiao4.gif';
// import share from '../assets/images/share.png';
import TimerComponent from "./TimerComponent";
// import EmbedComponent from './EmbedComponent';

const ResultCard = () => {
  const { arquetipo } = useParams();
  // const whatsappNumber = '5193708248'; // Define the WhatsApp number here
  const handleWhatsAppRedirect = () => {
    const whatsappLink = `https://api.whatsapp.com/send?phone=5551993708248&text=Recebi%20meu%20resultado%20do%20Quiz!%0A`; // Create the WhatsApp link
    window.open(whatsappLink, "_blank"); // Open the WhatsApp link in a new tab
  };
  const enrolmentRedirect = () => {
    if (arquetipo === "visionario")
      window.location.href =
        "https://alcidesmaya.edu.br/curso-tecnico-administracao";
    if (arquetipo === "criador")
      window.location.href =
        "https://alcidesmaya.edu.br/curso-tecnico-informatica";
    if (arquetipo === "estrategista")
      window.location.href =
        "https://alcidesmaya.edu.br/curso-tecnico-informatica";
    if (arquetipo === "guardiao")
      window.location.href =
        "https://alcidesmaya.edu.br/curso-tecnico-administracao";
  };

  return (
    <>
      <div className="result-card-container">
        <div className="result-header">
          <div className="result-header-side-div">
            <div className="header-side-div-text">
              <p style={{ color: "#FDD549" }}>Resultado</p>
              {arquetipo === "visionario" && (
                <>
                  <h2>O Visionário</h2>
                  <p>
                    Tipo de pessoa que não só sonha grande, mas também faz
                    acontecer. Com uma cabeça cheia de ideias e um coração
                    inspirador, está sempre um passo à frente, transformando o
                    "e se" em realidade. Liderança é com ela mesmo, inspirando
                    todos ao seu redor a mirar mais alto.
                  </p>
                </>
              )}

              {arquetipo === "criador" && (
                <>
                  <h2>O Criador</h2>
                  <p>
                    O mundo é um palco, e o criador está sempre pronto para
                    transformar o ordinário em extraordinário. Sua criatividade
                    não conhece limites, expressando isso em cada coisa que faz!
                  </p>
                </>
              )}

              {arquetipo === "estrategista" && (
                <>
                  <h2>O Estrategista</h2>
                  <p>
                    A vida é um xadrez gigante, e o estrategista está sempre
                    três jogadas à frente.
                  </p>
                </>
              )}

              {arquetipo === "guardiao" && (
                <>
                  <h2>O Guardião</h2>
                  <p>
                    O Guardião é o coração e alma de qualquer equipe. Com uma
                    empatia inabalável e um desejo genuíno de ajudar, ele se
                    dedica a fazer a diferença na vida das pessoas.
                  </p>
                </>
              )}
            </div>

            {/* <div className="share-buttons">
                            <button><img src={share} alt="share" />Instagram</button>
                            <button><img src={share} alt="share" />Twiter</button>
                        </div> */}
          </div>
          <div className="result-header-image-container">
            {/* <img src={
                            arquetipo === 'visionario' ? visionario :
                                arquetipo === 'criador' ? criador :
                                    arquetipo === 'estrategista' ? estrategista :
                                        arquetipo === 'guardiao' ? guardiao :
                                            ''
                        } alt={arquetipo} /> */}
            <div className="image-placeholder"></div>
          </div>
        </div>

        <div
          className="sugestions"
          style={{ display: "flex", marginTop: "1rem", marginBottom: "1rem" }}
        >
          <div
            className="profile-description"
            style={{ backgroundColor: "#3F3F3F", borderRadius: "16px" }}
          >
            <h2>Seu perfil</h2>
            {arquetipo === "visionario" && (
              <p>
                Olha, sabe o mundo dos negócios?
                <br></br>
                <br></br>
                Parece que foi feito pra você! Líder nato, inspira aqueles ao
                seu redor a alcançarem seus objetivos, navegando pelo mundo dos
                negócios com determinação e criatividade.
                <br></br>
                <br></br>
                Para o Visionário, cada desafio é uma oportunidade de
                crescimento e inovação.
              </p>
            )}
            {arquetipo === "criador" && (
              <p>
                Seja através de pixels, pincéis ou palavras, você expressa sua
                essência, emocionando e inspirando.
                <br></br>
                <br></br>
                Para você, cada projeto é uma tela em branco esperando para ser
                preenchida com cores vibrantes da sua paixão.
              </p>
            )}
            {arquetipo === "estrategista" && (
              <p>
                Com uma mente aguçada e um amor por detalhes, ele desvenda os
                mistérios do universo, seja através de números, códigos ou
                teorias complexas.
                <br></br>
                <br></br>
                Seu negócio é solucionar quebra-cabeças, decifrar enigmas e
                transformar complexidade em simplicidade.
              </p>
            )}
            {arquetipo === "guardiao" && (
              <p>
                Seja cuidando da saúde física e emocional ou lutando por justiça
                social, o Guardião está sempre lá, oferecendo uma mão amiga e um
                ombro para se apoiar.
                <br></br>
                <br></br>
                Para ele, a verdadeira realização vem em servir e conectar-se
                com os outros.
              </p>
            )}
          </div>
          <div
            className="related-jobs"
            style={{
              backgroundColor: "#3F3F3F",
              borderRadius: "16px",
              paddingTop: ".5rem",
            }}
          >
            <h2>Profissões relacionadas</h2>
            {arquetipo === "visionario" && (
              <ol>
                <li>
                  <b>Empreendedor:</b> Aquele que transforma sonhos em negócios
                  de sucesso.
                </li>
                <li>
                  <b>Gerente de Projetos:</b> O maestro que coordena equipes e
                  recursos para entregar resultados.
                </li>
                <li>
                  <b>Consultor de Negócios:</b> O estrategista que orienta
                  empresas a alcançarem seus objetivos.
                </li>
                <li>
                  <b>Especialista em Marketing:</b> O criativo que sabe como
                  posicionar marcas no coração do público.
                </li>
                <li>
                  <b>Analista Financeiro:</b> O número um em fazer o dinheiro
                  trabalhar a favor dos negócios.
                </li>
              </ol>
            )}
            {arquetipo === "criador" && (
              <ol>
                <li>
                  <b>Designer Gráfico:</b> O mago das cores e formas que
                  comunica visualmente.
                </li>
                <li>
                  <b>Publicitário:</b> O storyteller que cria campanhas que
                  cativam e convencem.
                </li>
                <li>
                  <b>Arquiteto:</b> O sonhador que desenha espaços que inspiram
                  a vida das pessoas.
                </li>
                <li>
                  <b>Estilista de Moda:</b> O visionário que traduz sentimentos
                  e culturas em vestimentas.
                </li>
                <li>
                  <b>Diretor de Cinema:</b> O contador de histórias que encanta
                  através da tela.
                </li>
              </ol>
            )}
            {arquetipo === "estrategista" && (
              <ol>
                <li>
                  <b>Engenheiro de Software:</b> O inovador que constrói o
                  futuro digital.
                </li>
                <li>
                  <b>Cientista de Dados:</b> O detetive que revela histórias
                  escondidas nos dados.
                </li>
                <li>
                  <b>Matemático:</b> O pensador que resolve os enigmas do
                  universo com lógica e precisão.
                </li>
                <li>
                  <b>Especialista em Cibersegurança:</b> O guardião que protege
                  o mundo digital contra ameaças.
                </li>
                <li>
                  <b>Pesquisador:</b> O curioso incansável em busca de novos
                  conhecimentos e descobertas.
                </li>
              </ol>
            )}
            {arquetipo === "guardiao" && (
              <ol>
                <li>
                  <b>Analista de Recursos Humanos:</b> Responsável por recrutar,
                  selecionar, treinar e desenvolver os colaboradores.
                </li>
                <li>
                  <b>Analista de Desenvolvimento Organizacional:</b> Trabalha
                  com o desenvolvimento e implementação de programas que visam
                  melhorar a eficiência organizacional, a cultura da empresa e o
                  bem-estar dos colaboradores.
                </li>
                <li>
                  <b>Psicólogo:</b> O confidente que ajuda a desvendar e curar
                  as dores da mente.
                </li>
                <li>
                  <b>Assistente Social:</b> O defensor que luta por justiça e
                  bem-estar social.
                </li>
                <li>
                  <b>Professor:</b> O mentor que ilumina mentes e guia futuras
                  gerações.
                </li>
              </ol>
            )}
          </div>
        </div>

        <TimerComponent />
        <div className="course-offer-container">
          <div className="course-offer">
            {arquetipo === "visionario" && (
              <div className="course-offer-course">
                <b style={{ marginBottom: ".5rem" }}>
                  Um curso para o seu perfil:
                </b>
                <h2>Técnico em Administração</h2>
                <p>
                  O curso que vai te levar lá: Técnico em Administração. Aqui
                  você vai aprender tudo sobre como deixar sua marca no mundo
                  empresarial. É o seu trampolim pro sucesso! Ideal para quem
                  busca uma carreira com flexibilidade e potencial de
                  crescimento. Ele fornece conhecimento essencial em gestão,
                  finanças, marketing e estratégia, capacitando você a navegar e
                  liderar no mundo empresarial com confiança e competência. Seja
                  qual for o seu destino profissional, começa aqui o seu caminho
                  certo para o sucesso.
                </p>
              </div>
            )}
            {arquetipo === "criador" && (
              <div className="course-offer-course">
                <b style={{ marginBottom: ".5rem" }}>
                  Um curso para o seu perfil:
                </b>
                <h2>Técnico em Informática</h2>
                <p>
                  O curso que vai acender sua chama criativa: Técnico em
                  Informática. Prepare-se para mergulhar no mundo da tecnologia,
                  programação e soluções inovadoras. Aqui é onde sua
                  criatividade encontra seu propósito! Aqui, você aprenderá a
                  arte de desenvolver softwares de maneira eficaz, a criar
                  soluções tecnológicas que solucionem problemas reais e a gerar
                  conexões emocionais duradouras com os usuários. Descubra como
                  utilizar as ferramentas de informática para construir sistemas
                  robustos, impulsionar a transformação digital e fomentar a
                  inovação.
                </p>
              </div>
            )}
            {arquetipo === "estrategista" && (
              <div className="course-offer-course">
                <b style={{ marginBottom: ".5rem" }}>
                  Um curso para o seu perfil:
                </b>
                <h2>Técnico em informática</h2>
                <p>
                  O curso que vai turbinar seu cérebro: Técnico em Informática
                  ou Redes de Computadores. Aqui você vai dominar o digital e
                  abrir portas para um futuro onde você é o protagonista. Esses
                  cursos podem te para entender a complexidade dos sistemas
                  digitais e redes, essenciais para o desenvolvimento de
                  software de ponta, a análise profunda de dados, a resolução de
                  problemas complexos com precisão matemática, a implementação
                  de medidas de cibersegurança robustas, e a condução de
                  pesquisas que empurram as fronteiras do conhecimento. Este
                  curso é o alicerce para aqueles que desejam não apenas
                  participar, mas liderar na era digital, transformando ideias
                  inovadoras em realidades que moldam nosso futuro.
                </p>
              </div>
            )}
            {arquetipo === "guardiao" && (
              <div className="course-offer-course">
                <b style={{ marginBottom: ".5rem" }}>
                  Um curso para o seu perfil:
                </b>
                <h2>Técnico em Administração</h2>
                <p>
                  O curso que vai preparar você para liderar e inovar no mundo
                  dos negócios: Técnico em Administração. Aqui você aprende a
                  criar estratégias de negócios eficazes, onde toda organização
                  se torna mais eficiente e competitiva. Promovendo crescimento,
                  sustentabilidade e excelência operacional dentro das empresas.
                  Este curso prepara os alunos com habilidades essenciais para
                  planejar, organizar e controlar atividades empresariais,
                  assegurando que cada processo contribua para o sucesso
                  organizacional. É ideal para quem deseja implementar práticas
                  de gestão inovadoras nas mais diversas áreas, desde o
                  financeiro até o marketing, passando pela logística. Através
                  de uma abordagem que une o pensamento analítico à visão
                  estratégica, este curso é fundamental para formar líderes
                  eficazes que reconhecem a importância de otimizar recursos e
                  processos, criando ambientes de trabalho produtivos e
                  motivadores, que refletem diretamente no crescimento e na
                  sustentabilidade do negócio.
                </p>
              </div>
            )}
            <button className="enroll-button" onClick={enrolmentRedirect}>
              <p
                style={{
                  backgroundColor: "#9D5EFB",
                  color: "white",
                  borderRadius: "16px",
                  padding: ".4rem",
                  fontSize: "1.2rem",
                  marginTop: "0",
                }}
              >
                Você ganhou!
              </p>
              <h3 style={{ color: "white", margin: "1rem .5rem 1rem .5rem" }}>
                Matricula promocional por{" "}
                <b style={{ color: "#FDD549" }}>R$99</b>
              </h3>
              <p style={{ color: "white", fontWeight: "bold" }}>
                Clique e saiba mais!
              </p>
            </button>
          </div>
          {/* <p className='saiba-mais'><b>Leia mais sobre seu perfil abaixo</b></p> */}
        </div>

        <div className="seller">
          <button
            style={{
              bottom: 0,
              left: 0,
              margin: "auto auto",
              background: "#9D5EFB",
            }}
            onClick={handleWhatsAppRedirect}
          >
            <p style={{ margin: "auto", color: "white", padding: ".3rem" }}>
              Quero falar com uma consultora <b>AGORA!</b>
            </p>
          </button>
        </div>
      </div>
      {/* {(arquetipo === 'visionario' || arquetipo === 'guardiao') &&
                <EmbedComponent src='https://alcidesmaya.edu.br/curso-tecnico-administracao' height={7400} />
            }

            {(arquetipo === 'estrategista' || arquetipo === 'criador') &&
                <EmbedComponent src='https://alcidesmaya.edu.br/curso-tecnico-informatica' height={7400} />
            } */}
    </>
  );
};

export default ResultCard;
