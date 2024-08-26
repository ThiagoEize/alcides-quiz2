import './App.css';
import Home from './components/Home';
import QuizIntroduction from './components/QuizIntroduction';
import {
  Route,
  Routes
} from "react-router-dom";

import QuestionComponent from './components/QuestionComponent';
import FormComponent from './components/FormComponent';
import ResultCard from './components/ResultCard';
import GoogleTagManager from './components/GoogleTagManager';

function App() {
  return (
    <div className="vocational-quiz-wrapper">
      <GoogleTagManager gtmId="GTM-NHWM2WM" />
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        ></Route>
        <Route
          path="/quiz"
          element={
            <QuizIntroduction />
          }
        ></Route>
        <Route
          path="/quiz/:questionIndex"
          element={
            <QuestionComponent />
          }
        ></Route>

        <Route
          path="/quiz/form"
          element={
            <FormComponent />
          }
        ></Route>
        <Route
          path="/quiz/resultado/:arquetipo"
          element={
            <ResultCard />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
