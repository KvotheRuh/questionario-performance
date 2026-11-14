import { useState } from "react";
import QuizEngine from "../components/QuizEngine";
import questoesData from "../data/questoes";
import "../styles/QuizPage.css";

export default function QuizPage() {
  // null = tela inicial | 2 = Prova RA1 (45) | 1 = Prova RA2 (40)
  const [selectedProva, setSelectedProva] = useState(null);

  const questoesRA1 = questoesData.filter((q) => q.IDProva === 2);
  const questoesRA2 = questoesData.filter((q) => q.IDProva === 1);

  const questoesSelecionadas =
    selectedProva === 2
      ? questoesRA1
      : selectedProva === 1
      ? questoesRA2
      : [];

  return (
    <div className="main-container">
      <div className="content-card">
        {selectedProva === null ? (
          <div className="quiz-welcome">
            <h1 className="quiz-welcome__title">Simulado de Avaliação</h1>
            <p className="quiz-welcome__subtitle">
              Escolha abaixo qual avaliação da disciplina de Performance em
              Sistemas Ciberfísicos você deseja praticar.
            </p>

            <div className="quiz-welcome__stats">
              <div className="stat-card">
                <span className="stat-card__value">{questoesRA1.length}</span>
                <span className="stat-card__label">Questões RA1</span>
              </div>
              <div className="stat-card">
                <span className="stat-card__value">{questoesRA2.length}</span>
                <span className="stat-card__label">Questões RA2</span>
              </div>
            </div>

            {questoesData.length > 0 ? (
              <div className="quiz-welcome__actions">
                <button
                  className="btn-start"
                  onClick={() => setSelectedProva(2)}
                >
                  Prova RA1
                </button>

                <button
                  className="btn-start btn-start--outline"
                  onClick={() => setSelectedProva(1)}
                >
                  Prova RA2
                </button>
              </div>
            ) : (
              <div className="quiz-welcome__empty">
                O banco de questões está vazio no momento.
              </div>
            )}
          </div>
        ) : (
          <QuizEngine
            key={selectedProva}
            questions={questoesSelecionadas}
            provaAtual={selectedProva}
            onSelectProva={(novoIdProva) => setSelectedProva(novoIdProva)}
            onBack={() => setSelectedProva(null)}
          />
        )}
      </div>
    </div>
  );
}