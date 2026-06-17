import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__logo-dot" />
        <span className="header__title">Performance em Sistemas Ciberfísicos</span>
      </div>
    </header>
  );
}