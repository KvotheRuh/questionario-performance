import { useState } from "react";
import QuizEngine from "../components/QuizEngine";
import questoesData from "../data/questoes";
import "../styles/QuizPage.css";

export default function QuizPage() {
  const [isQuizActive, setIsQuizActive] = useState(false);

  return (
    <div className="main-container">
      <div className="content-card">
        
        {!isQuizActive ? (
          <div className="quiz-welcome">
            <h1 className="quiz-welcome__title">Avaliação Geral</h1>
            <p className="quiz-welcome__subtitle">
              Questões sobre o conteúdo do RA2 da disciplina de Performance em Sistemas Ciberfísicos.
            </p>

            <div className="quiz-welcome__stats">
              <div className="stat-card">
                <span className="stat-card__value">{questoesData.length}</span>
                <span className="stat-card__label">Questões Totais</span>
              </div>
              <div className="stat-card">
                <span className="stat-card__value">Objetivas</span>
                <span className="stat-card__label">Formato</span>
              </div>
            </div>

            {questoesData.length > 0 ? (
              <button className="btn-start" onClick={() => setIsQuizActive(true)}>
                Iniciar Questionário
              </button>
            ) : (
              <div className="quiz-welcome__empty">
                O banco de questões está vazio no momento.
              </div>
            )}
          </div>
        ) : (
          <QuizEngine
            questions={questoesData}
            onBack={() => setIsQuizActive(false)}
          />
        )}

      </div>
    </div>
  );
}