/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { QuizContext } from "../context/QuizContext"; // Assuming you have a QuizContext
import "./QuestionComponent.css";

const QuestionComponent = () => {
  const { questionsArray, setQuestionsArray, formData, setFormData } =
    useContext(QuizContext);
  const { questionIndex } = useParams();
  const navigate = useNavigate();

  const sumAndSortOptions = () => {
    // Get all selected options
    const selectedOptions = questionsArray.flatMap((question) =>
      question.options.filter((option) => option.selected)
    );

    // Calculate the sum of a1, a2, a3, a4, a5 for each selected option
    const arquetypeSums = [
      { key: "cuidador", value: 0 },
      { key: "tecnico", value: 0 },
      { key: "lider", value: 0 },
      { key: "artista", value: 0 },
      { key: "ambientalista", value: 0 },
    ];

    selectedOptions.forEach((option) => {
      arquetypeSums[0].value += option.a1;
      arquetypeSums[1].value += option.a2;
      arquetypeSums[2].value += option.a3;
      arquetypeSums[3].value += option.a4;
      arquetypeSums[4].value += option.a5;
    });

    const sortedArquetypes = arquetypeSums.sort((a, b) => b.value - a.value);

    setFormData({
      ...formData,
      cf_resultado_do_quiz: sortedArquetypes[0].key,
    });

    // Define a message based on the top result
    const resultMessage = {
      cuidador:
        "Sua vocação está na Saúde e Bem-Estar. Imagine-se salvando vidas como Técnico em Enfermagem, desvendando mistérios do corpo humano em Análises Clínicas, ou revelando o interior das pessoas (literalmente!) em Radiologia. Que tal transformar vidas como um expert em Nutrição e Dietética? O mundo precisa do seu toque de cura!",
      tecnico:
        "O futuro te chama! Tecnologia e Inovação correm nas suas veias. Você pode ser o próximo gênio da Programação, revolucionar o mundo com Eletrônica, ou dar vida às máquinas com Mecatrônica. Como Técnico em Informática, você será o herói que todos chamam quando o sistema cai. Prepare-se para moldar o amanhã!",
      lider:
        "Você tem a liderança no sangue! Gestão e Negócios são sua praia. Imagine-se comandando empresas como um ás da Administração, equilibrando números na Contabilidade, ou sendo o mestre das entregas na Logística. Em Recursos Humanos, você será o cupido corporativo, unindo talentos e oportunidades. O mundo dos negócios aguarda seu toque de Midas!",
      artista:
        "Sua criatividade não tem limites! Criatividade e Design são seu playground. Como Designer Gráfico, você dará vida a ideias. No Marketing, seu trabalho será viralizar sonhos. Transforme espaços como Designer de Interiores, ditando tendências na Moda, ou conte histórias através da Produção Audiovisual. O mundo é sua tela em branco!.",
      ambientalista:
        "O planeta conta com você! Meio Ambiente e Sustentabilidade são sua missão. Como Técnico em Meio Ambiente, você será o guardião da Terra. No Agronegócio, alimentará o mundo de forma sustentável. Com Energias Renováveis, iluminará o futuro, e em Segurança do Trabalho, protegerá nosso bem mais precioso: as pessoas. Prepare-se para ser o herói que o planeta precisa!.",
    }[sortedArquetypes[0].key];

    // alert(
    //   resultMessage +
    //     "\nAgora que você descobriu sua área ideal, que tal dar o próximo passo? Conheça nossos cursos técnicos e encontre o que te levará ao sucesso!"
    // );
  };

  const currentQuestionIndex = parseInt(questionIndex, 10) - 1;
  const question = questionsArray[currentQuestionIndex];

  const handleOptionClick = (optionIndex) => {
    const updatedQuestions = questionsArray.map((q, index) => {
      if (index === currentQuestionIndex) {
        return {
          ...q,
          options: q.options.map((option, idx) => ({
            ...option,
            selected: idx === optionIndex,
          })),
        };
      }
      return q;
    });
    setQuestionsArray(updatedQuestions);
  };

  const handlePreviousClick = () => {
    navigate(`/quiz/${currentQuestionIndex}`);
  };

  const handleNextClick = () => {
    navigate(`/quiz/${currentQuestionIndex + 2}`);
  };

  const handleSubmit = () => {
    sumAndSortOptions();
    navigate("/quiz/form");
  };

  return (
    <div className="vocational-quiz-wrapper questions-wrapper">
      <NavBar />
      <div className="question-image-placeholder">
        <img src={question.gif} alt="Question" />
      </div>
      <h2 className="question-component-text">{question.title}</h2>
      {question.options.map((option, index) => (
        <button
          key={index}
          className={`option-button ${option.selected ? "selected" : ""}`}
          onClick={() => handleOptionClick(index)}
        >
          <b
            style={{
              marginRight: "1rem",
              color: "#3F3F3F",
              padding: "0 5px 0 5px",
              alignSelf: "flex-start",
              background: "#D9D9D9",
              borderRadius: 9999,
            }}
          >
            {String.fromCharCode(65 + index)}
          </b>{" "}
          {option.text}
        </button>
      ))}
      <div className="button-container">
        {currentQuestionIndex > 0 && (
          <button
            type="button"
            className="question-button"
            onClick={handlePreviousClick}
          >
            Anterior
          </button>
        )}
        &nbsp;
        {currentQuestionIndex < questionsArray.length - 1 ? (
          <button
            type="button"
            className="question-button"
            onClick={handleNextClick}
          >
            Próxima pergunta
          </button>
        ) : (
          <button
            type="button"
            className="question-button"
            onClick={handleSubmit}
          >
            Ultima etapa
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionComponent;
