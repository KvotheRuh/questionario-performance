import "../styles/global.css";

export default function TopicBar({ items, activeId, onSelect }) {
  return (
    <div className="topic-bar">
      <div className="topic-bar__inner">
        {items.map((item, i) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`topic-pill${item.id === activeId ? " topic-pill--active" : ""}`}
          >
            <span className="topic-pill__num">{String(i + 1).padStart(2, "0")}</span>
            {item.titulo}
          </button>
        ))}
      </div>
    </div>
  );
}
