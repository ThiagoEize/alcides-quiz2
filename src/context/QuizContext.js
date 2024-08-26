import { createContext, useContext, useState } from "react";

import gif1 from "../assets/gifs/q1.gif";
import gif2 from "../assets/gifs/q2.gif";
import gif3 from "../assets/gifs/q3.gif";
import gif4 from "../assets/gifs/q4.gif";
import gif5 from "../assets/gifs/q5.gif";
// import gif6 from "../assets/gifs/q6.gif";
// import gif7 from "../assets/gifs/q7.gif";

export const QuizContext = createContext();

export function useQuizContext() {
  return useContext(QuizContext);
}

export default function QuizContextProvider({ children }) {
  const [questionsArray, setQuestionsArray] = useState([
    {
      title: "Qual área te atrai mais?",
      gif: gif1,
      options: [
        {
          text: "Saúde e bem-estar",
          selected: false,
          a1: 1,
          a2: 0,
          a3: 0,
          a4: 0,
          a5: 0,
        },
        {
          text: "Tecnologia e inovação",
          selected: false,
          a1: 0,
          a2: 1,
          a3: 0,
          a4: 0,
          a5: 0,
        },
        {
          text: "Gestão e negócios",
          selected: false,
          a1: 0,
          a2: 0,
          a3: 1,
          a4: 0,
          a5: 0,
        },
        {
          text: "Criatividade e design",
          selected: false,
          a1: 0,
          a2: 0,
          a3: 0,
          a4: 1,
          a5: 0,
        },
        {
          text: "Meio ambiente e sustentabilidade",
          selected: false,
          a1: 0,
          a2: 0,
          a3: 0,
          a4: 0,
          a5: 1,
        },
      ],
    },
    {
      title: "Quais são seus principais talentos?",
      gif: gif2,
      options: [
        {
          text: "Cuidar de pessoas, ter empatia e ser organizado",
          selected: false,
          a1: 1,
          a2: 0,
          a3: 0,
          a4: 0,
          a5: 0,
        },
        {
          text: "Raciocínio lógico, curiosidade e facilidade com tecnologia",
          selected: false,
          a1: 0,
          a2: 1,
          a3: 0,
          a4: 0,
          a5: 0,
        },
        {
          text: "Liderança, comunicação e organização",
          selected: false,
          a1: 0,
          a2: 0,
          a3: 1,
          a4: 0,
          a5: 0,
        },
        {
          text: "Criatividade, senso estético e habilidades manuais",
          selected: false,
          a1: 0,
          a2: 0,
          a3: 0,
          a4: 1,
          a5: 0,
        },
        {
          text: "Consciência ambiental, responsabilidade social e paixão pela natureza",
          selected: false,
          a1: 0,
          a2: 0,
          a3: 0,
          a4: 0,
          a5: 1,
        },
      ],
    },
    {
      title: "Como você se imagina no futuro?",
      gif: gif3,
      options: [
        {
          text: "Ajudando pessoas a terem uma vida mais saudável",
          selected: false,
          a1: 1,
          a2: 0,
          a3: 0,
          a4: 0,
          a5: 0,
        },
        {
          text: "Criando soluções inovadoras para o mundo",
          selected: false,
          a1: 0,
          a2: 1,
          a3: 0,
          a4: 0,
          a5: 0,
        },
        {
          text: "Gerenciando equipes e projetos de sucesso",
          selected: false,
          a1: 0,
          a2: 0,
          a3: 1,
          a4: 0,
          a5: 0,
        },
        {
          text: "Expressando sua criatividade através de projetos incríveis",
          selected: false,
          a1: 0,
          a2: 0,
          a3: 0,
          a4: 1,
          a5: 0,
        },
        {
          text: "Contribuindo para um planeta mais sustentável",
          selected: false,
          a1: 0,
          a2: 0,
          a3: 0,
          a4: 0,
          a5: 1,
        },
      ],
    },
    {
      title: "Qual tipo de ambiente de trabalho você prefere?",
      gif: gif4,
      options: [
        {
          text: "Hospitais, clínicas e laboratórios",
          selected: false,
          a1: 1,
          a2: 0,
          a3: 0,
          a4: 0,
          a5: 0,
        },
        {
          text: "Empresas de tecnologia, startups e escritórios modernos",
          selected: false,
          a1: 0,
          a2: 1,
          a3: 0,
          a4: 0,
          a5: 0,
        },
        {
          text: "Empresas de diversos setores, escritórios e ambientes corporativos",
          selected: false,
          a1: 0,
          a2: 0,
          a3: 1,
          a4: 0,
          a5: 0,
        },
        {
          text: "Agências de publicidade, estúdios de design e ambientes criativos",
          selected: false,
          a1: 0,
          a2: 0,
          a3: 0,
          a4: 1,
          a5: 0,
        },
        {
          text: "ONGs, empresas de energia renovável e projetos ao ar livre",
          selected: false,
          a1: 0,
          a2: 0,
          a3: 0,
          a4: 0,
          a5: 1,
        },
      ],
    },
    {
      title: "O que te motiva a estudar e trabalhar?",
      gif: gif5,
      options: [
        {
          text: "Ajudar o próximo e fazer a diferença na vida das pessoas",
          selected: false,
          a1: 1,
          a2: 0,
          a3: 0,
          a4: 0,
          a5: 0,
        },
        {
          text: "Aprender coisas novas e estar sempre atualizado com as tecnologias",
          selected: false,
          a1: 0,
          a2: 1,
          a3: 0,
          a4: 0,
          a5: 0,
        },
        {
          text: "Alcançar o sucesso profissional e ter estabilidade financeira",
          selected: false,
          a1: 0,
          a2: 0,
          a3: 1,
          a4: 0,
          a5: 0,
        },
        {
          text: "Ter liberdade para criar e expressar suas ideias",
          selected: false,
          a1: 0,
          a2: 0,
          a3: 0,
          a4: 1,
          a5: 0,
        },
        {
          text: "Proteger o meio ambiente e construir um futuro melhor para todos",
          selected: false,
          a1: 0,
          a2: 0,
          a3: 0,
          a4: 0,
          a5: 1,
        },
      ],
    },
  ]);
  const [formData, setFormData] = useState({
    conversion_identifier: "Alcides Quiz",
    email: "",
    cf_seu_nome: "",
    cf_seu_telefone: "51",
    cf_resultado_do_quiz: "",
  });
  return (
    <QuizContext.Provider
      value={{
        questionsArray,
        setQuestionsArray,
        formData,
        setFormData,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
