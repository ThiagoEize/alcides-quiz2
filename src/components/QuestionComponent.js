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
      { key: "Saúde e bem-estar", value: 0 },
      { key: "Tecnologia e inovação", value: 0 },
      { key: "Gestão e Negócios", value: 0 },
      { key: "Criatividade e design", value: 0 },
      { key: "Meio ambiente e sustentabilidade", value: 0 },
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
      "Saúde e bem-estar":
        "Sua área é Saúde e bem-estar. Cursos como Técnico em Enfermagem, Radiologia, Análises Clínicas ou Nutrição e Dietética podem ser ideais para você.",
      "Tecnologia e inovação":
        "Sua área é Tecnologia e inovação. Cursos como Técnico em Informática, Programação, Eletrônica ou Mecatrônica podem ser perfeitos para você.",
      "Gestão e Negócios":
        "Sua área é Gestão e Negócios. Cursos como Técnico em Administração, Contabilidade, Logística ou Recursos Humanos podem ser ótimas opções para você.",
      "Criatividade e design":
        "Sua área é Criatividade e design. Cursos como Técnico em Design Gráfico, Design de Interiores, Moda ou Produção Audiovisual podem ser ideais para você.",
      "Meio ambiente e sustentabilidade":
        "Sua área é Meio ambiente e sustentabilidade. Cursos como Técnico em Meio Ambiente, Agronegócio, Energias Renováveis ou Segurança do Trabalho podem ser perfeitos para você.",
    }[sortedArquetypes[0].key];

    alert(
      resultMessage +
        "\nAgora que você descobriu sua área ideal, que tal dar o próximo passo? Conheça nossos cursos técnicos e encontre o que te levará ao sucesso!"
    );
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
