import React from "react";
import "./ResultCard.css"; // Importing the CSS file
import { useParams } from "react-router-dom";
import tecnico from "../assets/gifs/O futuro te chama.gif";
import ambientalista from "../assets/gifs/O planeta conta com você.gif";
import artista from "../assets/gifs/Sua criatividade não tem limites.gif";
import cuidador from "../assets/gifs/Você nasceu para cuidar.gif";
import lider from "../assets/gifs/Você tem a liderança no sangue.gif";
// import share from '../assets/images/share.png';
// import TimerComponent from "./TimerComponent";
// import EmbedComponent from './EmbedComponent';

const ResultCard = () => {
  const { arquetipo } = useParams();
  // const whatsappNumber = '5193708248'; // Define the WhatsApp number here
  const handleWhatsAppRedirect = () => {
    const whatsappLink = `https://api.whatsapp.com/send?phone=5551993708248&text=Recebi%20meu%20resultado%20do%20Quiz!%0A`; // Create the WhatsApp link
    window.open(whatsappLink, "_blank"); // Open the WhatsApp link in a new tab
  };
  // const enrolmentRedirect = () => {
  //   if (arquetipo === "cuidador")
  //     window.location.href =
  //       "https://alcidesmaya.edu.br/curso-tecnico-administracao";
  //   if (arquetipo === "tecnico")
  //     window.location.href =
  //       "https://alcidesmaya.edu.br/curso-tecnico-informatica";
  //   if (arquetipo === "lider")
  //     window.location.href =
  //       "https://alcidesmaya.edu.br/curso-tecnico-informatica";
  //   if (arquetipo === "artista")
  //     window.location.href =
  //       "https://alcidesmaya.edu.br/curso-tecnico-administracao";
  // };

  return (
    <>
      <div className="result-card-container">
        <div className="result-header">
          <div className="result-header-side-div">
            <div width={"100%"}>
              <p style={{ color: "#FDD549" }}>Resultado</p>
              {arquetipo === "cuidador" && (
                <>
                  <h2>Você nasceu para cuidar!</h2>
                  <p>
                    Sua vocação está na Saúde e Bem-Estar. Imagine-se salvando
                    vidas como Técnico em Enfermagem, desvendando mistérios do
                    corpo humano em Análises Clínicas, ou revelando o interior
                    das pessoas (literalmente!) em Radiologia. Que tal
                    transformar vidas como um expert em Nutrição e Dietética? O
                    mundo precisa do seu toque de cura!
                  </p>
                </>
              )}

              {arquetipo === "tecnico" && (
                <>
                  <h2>O futuro te chama!</h2>
                  <p>
                    Tecnologia e Inovação correm nas suas veias. Você pode ser o
                    próximo gênio da Programação, revolucionar o mundo com
                    Eletrônica, ou dar vida às máquinas com Mecatrônica. Como
                    Técnico em Informática, você será o herói que todos chamam
                    quando o sistema cai. Prepare-se para moldar o amanhã!
                  </p>
                </>
              )}

              {arquetipo === "lider" && (
                <>
                  <h2>Você tem a liderança no sangue!</h2>
                  <p>
                    Gestão e Negócios são sua praia. Imagine-se comandando
                    empresas como um ás da Administração, equilibrando números
                    na Contabilidade, ou sendo o mestre das entregas na
                    Logística. Em Recursos Humanos, você será o cupido
                    corporativo, unindo talentos e oportunidades. O mundo dos
                    negócios aguarda seu toque de Midas!
                  </p>
                </>
              )}

              {arquetipo === "artista" && (
                <>
                  <h2>Sua criatividade não tem limites!</h2>
                  <p>
                    Criatividade e Design são seu playground. Como Designer
                    Gráfico, você dará vida a ideias. No Marketing, seu trabalho
                    será viralizar sonhos. Transforme espaços como Designer de
                    Interiores, ditando tendências na Moda, ou conte histórias
                    através da Produção Audiovisual. O mundo é sua tela em
                    branco!
                  </p>
                </>
              )}

              {arquetipo === "ambientalista" && (
                <>
                  <h2>O planeta conta com você!</h2>
                  <p>
                    Meio Ambiente e Sustentabilidade são sua missão. Como
                    Técnico em Meio Ambiente, você será o guardião da Terra. No
                    Agronegócio, alimentará o mundo de forma sustentável. Com
                    Energias Renováveis, iluminará o futuro, e em Segurança do
                    Trabalho, protegerá nosso bem mais precioso: as pessoas.
                    Prepare-se para ser o herói que o planeta precisa!
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
            <img
              src={
                arquetipo === "cuidador"
                  ? cuidador
                  : arquetipo === "tecnico"
                  ? tecnico
                  : arquetipo === "lider"
                  ? lider
                  : arquetipo === "artista"
                  ? artista
                  : arquetipo === "ambientalista"
                  ? ambientalista
                  : ""
              }
              alt={arquetipo}
            />
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
            {arquetipo === "cuidador" && (
              <p>
                Você tem uma incrível capacidade de cuidar e se preocupar com o
                bem-estar dos outros. Seja na área da saúde ou no apoio social,
                você se destaca por sua empatia e dedicação. O mundo precisa de
                pessoas como você, que estão dispostas a fazer a diferença na
                vida dos outros. Seu destino está em profissões que envolvem
                cuidado, suporte e uma mão amiga.
              </p>
            )}
            {arquetipo === "tecnico" && (
              <p>
                A tecnologia corre em suas veias, e você tem uma mente voltada
                para a inovação. Sempre buscando a próxima solução tecnológica,
                você é o tipo de pessoa que adora desafios lógicos e técnicos.
                Você se destaca em ambientes que exigem precisão, raciocínio
                rápido e a capacidade de transformar problemas complexos em
                soluções simples.
              </p>
            )}
            {arquetipo === "lider" && (
              <p>
                Com uma habilidade natural para liderar e inspirar, você é
                aquele que os outros procuram em busca de orientação e direção.
                Sua capacidade de tomar decisões assertivas e estratégicas o
                coloca à frente em ambientes de gestão e liderança. Para você,
                cada desafio é uma oportunidade de demonstrar suas habilidades e
                guiar sua equipe ao sucesso.
              </p>
            )}
            {arquetipo === "artista" && (
              <p>
                A criatividade é sua marca registrada, e você vê o mundo como
                uma tela em branco, pronta para ser preenchida com suas ideias
                inovadoras. Seja nas artes visuais, design ou comunicação, você
                se destaca por sua capacidade de transformar pensamentos
                abstratos em obras que inspiram e emocionam. Seu talento para
                capturar a essência do que é belo e significativo é inigualável.
              </p>
            )}
            {arquetipo === "ambientalista" && (
              <p>
                A natureza e a sustentabilidade são suas paixões, e você se
                dedica a proteger e preservar o meio ambiente. Com um forte
                senso de responsabilidade ecológica, você se empenha em criar
                soluções que beneficiem o planeta. Sua vocação está em carreiras
                que envolvem o cuidado com o meio ambiente e a promoção de
                práticas sustentáveis.
              </p>
            )}
          </div>
          {/* <div
            className="related-jobs"
            style={{
              backgroundColor: "#3F3F3F",
              borderRadius: "16px",
              paddingTop: ".5rem",
            }}
          >
            <h2>Profissões relacionadas</h2>
            {arquetipo === "cuidador" && (
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
                  <b>Consultor de Negócios:</b> O lider que orienta empresas a
                  alcançarem seus objetivos.
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
            {arquetipo === "tecnico" && (
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
            {arquetipo === "lider" && (
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
            {arquetipo === "artista" && (
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
          </div> */}
        </div>

        {/* <TimerComponent />
        <div className="course-offer-container">
          <div className="course-offer">
            {arquetipo === "cuidador" && (
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
            {arquetipo === "tecnico" && (
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
            {arquetipo === "lider" && (
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
            {arquetipo === "artista" && (
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
            {arquetipo === "ambientalista" && (
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
        </div> */}

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
      {/* {(arquetipo === 'cuidador' || arquetipo === 'artista') &&
                <EmbedComponent src='https://alcidesmaya.edu.br/curso-tecnico-administracao' height={7400} />
            }

            {(arquetipo === 'lider' || arquetipo === 'tecnico') &&
                <EmbedComponent src='https://alcidesmaya.edu.br/curso-tecnico-informatica' height={7400} />
            } */}
    </>
  );
};

export default ResultCard;
