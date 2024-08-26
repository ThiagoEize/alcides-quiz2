/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import InputMask from 'react-input-mask';
import './FormComponent.css';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext'; // Assuming you have a QuizContext
import axios from 'axios';

const FormComponent = () => {
    const { questionsArray, formData, setFormData } = useContext(QuizContext);

    const sendFormData = async () => {
        const apiKey = process.env.REACT_APP_RDSTATION_API_KEY; // Ensure this is set in your .env
        const url = `https://api.rd.services/platform/conversions?api_key=${apiKey}`;

        const data = {
            event_type: 'CONVERSION',
            event_family: 'CDP',
            payload: formData
        };

        axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => {
                console.log("Response:", response); // Log the entire response object
                console.log("Response data:", response.data); // Log only the data from the response
            })
            .catch(error => {
                console.error("Error:", error); // Log any errors
                if (error.response) {
                    console.error("Error response:", error.response); // Detailed info if response was received
                }
            });
    }

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation checks
        if (!formData.cf_seu_nome.trim()) {
            alert('Por favor, insira o nome completo.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Validate cellphone number length
        const phoneNumberDigits = formData.cf_seu_telefone.replace(/\D/g, ''); // Remove non-digit characters
        if (phoneNumberDigits.length < 10) {
            alert('Por favor, insira um número de telefone valido.');
            return;
        }

        let isAllQuestionsAnswered = questionsArray.every(question => question.options.some(option => option.selected));
        if (!isAllQuestionsAnswered) {
            let unansweredQuestionIndex = questionsArray.findIndex(question => question.options.every(option => !option.selected));
            alert(`Por favor, responda a pergunta número ${unansweredQuestionIndex + 1}.`);
            console.log("unansweredQuestionIndex", unansweredQuestionIndex + 1);
            navigate(`/quiz/${unansweredQuestionIndex + 1}`);
        } else {
            console.log("formData", formData);

            sendFormData()

            navigate(`/quiz/resultado/${formData.cf_resultado_do_quiz}`);
        }
    };

    return (
        <div className="form-container">
            <p className="quase-la">Quase lá</p>
            <h2 className="form-header">Preencha as informações abaixo:</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <h3>Nome completo:</h3>
                    <input
                        style={{ backgroundColor: '#3F3F3F' }}
                        type="text"
                        name="cf_seu_nome"
                        placeholder="Nome completo"
                        value={formData.cf_seu_nome}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <h3>Email:</h3>
                    <input
                        type="text"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <h3>Celular:</h3>
                    <InputMask
                        mask="(99) 99999-9999"
                        type="tel"
                        name="cf_seu_telefone"
                        placeholder="Telefone (51) 99999-9999"
                        value={formData.cf_seu_telefone}
                        onChange={handleChange}
                        alwaysShowMask={true}
                        maskChar=""
                    />
                </div>
                <button type="submit" className="submit-button">Ver resultado</button>
            </form>
        </div>
    );
};

export default FormComponent;
