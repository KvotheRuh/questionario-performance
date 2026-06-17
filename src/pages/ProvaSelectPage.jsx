import { provas } from "../data/topicos";
import "../styles/ProvaSelectPage.css";

export default function ProvaSelectPage({ onSelectProva }) {
  return (
    <div className="prova-select">
      <div className="prova-select__inner">
        <div className="prova-select__header">
          <h1 className="prova-select__title">Seleção de Avaliação</h1>
          <p className="prova-select__subtitle">
            Selecione o módulo da disciplina que deseja acessar. As questões estão organizadas sequencialmente por tópico.
          </p>
        </div>

        <div className="prova-select__grid">
          {provas.map((prova) => (
            <button
              key={prova.id}
              className={`prova-card ${prova.emBreve ? "prova-card--disabled" : ""}`}
              onClick={() => !prova.emBreve && onSelectProva(prova.id)}
              disabled={prova.emBreve}
            >
              <div className="prova-card__content">
                <p className="prova-card__title">{prova.titulo}</p>
                <p className="prova-card__desc">{prova.descricao}</p>
              </div>
              <span className="prova-card__badge">
                {prova.emBreve ? "Indisponível" : "Acessar Questões"}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}