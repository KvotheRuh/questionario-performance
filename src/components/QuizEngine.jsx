import { useState } from "react";
import "../styles/QuizEngine.css";

export default function QuizEngine({
  questions,
  provaAtual,
  onSelectProva,
  onBack,
}) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [showProvaModal, setShowProvaModal] = useState(false);

  const question = questions[currentQ];

  function handleSelect(idx) {
    if (selected !== null) return;
    setSelected(idx);

    const isCorrect = idx === question.correct;
    if (isCorrect) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, { correct: isCorrect, selectedIdx: idx }]);
  }

  function handleNext() {
    if (currentQ + 1 >= questions.length) setFinished(true);
    else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
    }
  }

  function handlePrev() {
    if (currentQ > 0) {
      const prevAnswer = answers[currentQ - 1];
      if (prevAnswer?.correct) setScore((s) => s - 1);
      setAnswers((a) => a.slice(0, -1));
      setCurrentQ((q) => q - 1);
      setSelected(null);
    } else {
      onBack();
    }
  }

  function handleTrocarProva(novoId) {
    setShowProvaModal(false);
    if (novoId === provaAtual) {
      // Se escolher a mesma prova, reinicia do zero
      setCurrentQ(0);
      setSelected(null);
      setScore(0);
      setFinished(false);
      setAnswers([]);
    } else {
      onSelectProva(novoId);
    }
  }

  const renderModal = () => {
    if (!showProvaModal) return null;

    return (
      <div
        className="quiz-modal-overlay"
        onClick={() => setShowProvaModal(false)}
      >
        <div
          className="quiz-modal"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-prova-title"
        >
          <div className="quiz-modal__header">
            <h3 id="modal-prova-title" className="quiz-modal__title">
              Alterar Avaliação
            </h3>
            <button
              className="quiz-modal__close"
              onClick={() => setShowProvaModal(false)}
              aria-label="Fechar"
            >
              ×
            </button>
          </div>

          <p className="quiz-modal__desc">
            Selecione abaixo qual prova você deseja realizar. Ao escolher uma
            opção, o questionário atual será encerrado e você será direcionado
            para a primeira questão da avaliação selecionada.
          </p>

          <div className="quiz-modal__actions">
            <button
              className={`quiz-modal__prova-btn ${
                provaAtual === 2 ? "is-current" : ""
              }`}
              onClick={() => handleTrocarProva(2)}
            >
              <div className="quiz-modal__prova-info">
                <span className="quiz-modal__prova-name">Prova RA1</span>
                <span className="quiz-modal__prova-sub">
                  Arquiteturas, Representação Numérica e Memória
                </span>
              </div>
              {provaAtual === 2 && (
                <span className="quiz-modal__badge">Atual</span>
              )}
            </button>

            <button
              className={`quiz-modal__prova-btn ${
                provaAtual === 1 ? "is-current" : ""
              }`}
              onClick={() => handleTrocarProva(1)}
            >
              <div className="quiz-modal__prova-info">
                <span className="quiz-modal__prova-name">Prova RA2</span>
                <span className="quiz-modal__prova-sub">
                  Processos, Threads, Pipeline e Escalonamento de CPU
                </span>
              </div>
              {provaAtual === 1 && (
                <span className="quiz-modal__badge">Atual</span>
              )}
            </button>
          </div>

          <div className="quiz-modal__footer">
            <button
              className="btn-clean btn-clean--outline"
              onClick={() => setShowProvaModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="quiz-result">
        {renderModal()}

        <h2 className="quiz-result__title">Avaliação Concluída</h2>
        <p className="quiz-result__subtitle">
          Prova {provaAtual === 2 ? "RA2" : "RA1"} — Verifique seu desempenho final
        </p>

        <div className="quiz-result__circle">
          <span className="quiz-result__score">{score}</span>
          <span className="quiz-result__total">de {questions.length}</span>
        </div>

        <p className="quiz-result__pct">{pct}% de taxa de acerto</p>

        <div className="quiz-result__actions">
          <button
            className="btn-clean btn-clean--outline"
            onClick={() => {
              setCurrentQ(0);
              setSelected(null);
              setScore(0);
              setFinished(false);
              setAnswers([]);
            }}
          >
            Refazer Questionário
          </button>

          <button
            className="btn-clean btn-clean--outline"
            onClick={() => setShowProvaModal(true)}
          >
            Mudar Prova
          </button>

          <button className="btn-clean btn-clean--primary" onClick={onBack}>
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-engine">
      {renderModal()}

      <div className="quiz-engine__header">
        <button className="btn-back" onClick={handlePrev}>
          ← Voltar
        </button>

        <div className="quiz-engine__header-right">
          <span className="quiz-engine__prova-tag">
            {provaAtual === 2 ? "Prova RA1" : "Prova RA2"}
          </span>
          <span className="quiz-engine__counter">
            Questão {currentQ + 1} / {questions.length}
          </span>
          <button
            className="btn-change-prova"
            onClick={() => setShowProvaModal(true)}
          >
            Mudar Prova
          </button>
        </div>
      </div>

      <div className="quiz-engine__progress">
        <div
          className="progress-fill"
          style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="quiz-engine__body">
        <div
          className="quiz-engine__q-text"
          dangerouslySetInnerHTML={{ __html: question.question }}
        />

        {question.image && (
          <div className="quiz-engine__image">
            <img src={question.image} alt="Referência" />
          </div>
        )}

        <div className="quiz-options">
          {question.options.map((opt, idx) => {
            let statusClass = "";
            if (selected !== null) {
              if (idx === question.correct) statusClass = "is-correct";
              else if (idx === selected) statusClass = "is-wrong";
              else statusClass = "is-disabled";
            }

            return (
              <button
                key={idx}
                className={`quiz-option ${statusClass}`}
                onClick={() => handleSelect(idx)}
                disabled={selected !== null}
              >
                <div className="quiz-option__letter">
                  {String.fromCharCode(65 + idx)}
                </div>
                <div
                  className="quiz-option__text"
                  dangerouslySetInnerHTML={{ __html: opt }}
                />
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className="quiz-explanation">
            <strong>Comentário Acadêmico:</strong>
            <p dangerouslySetInnerHTML={{ __html: question.explanation }} />
          </div>
        )}
      </div>

      <div className="quiz-engine__footer">
        {selected !== null && (
          <button className="btn-clean btn-clean--primary" onClick={handleNext}>
            {currentQ + 1 >= questions.length
              ? "Finalizar"
              : "Próxima Questão"}{" "}
            →
          </button>
        )}
      </div>
    </div>
  );
}