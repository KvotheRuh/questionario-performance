import { useRef, useEffect } from "react";
import "../styles/Sidebar.css";

export default function Sidebar({ items, activeId, onSelect }) {
  const listRef = useRef(null);
  const activeRef = useRef(null);

  useEffect(() => {
    if (activeRef.current && listRef.current) {
      const list = listRef.current;
      const item = activeRef.current;
      list.scrollTo({
        left: item.offsetLeft - list.offsetWidth / 2 + item.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <span className="sidebar__title">Tópicos de Estudo</span>
      </div>
      <div className="sidebar__list" ref={listRef}>
        {items.map((item, i) => (
          <button
            key={item.id}
            ref={item.id === activeId ? activeRef : null}
            onClick={() => onSelect(item.id)}
            className={`sidebar__item ${item.id === activeId ? "is-active" : ""}`}
          >
            <div className="sidebar__item-num">{String(i + 1).padStart(2, "0")}</div>
            <span className="sidebar__item-name">{item.titulo}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}