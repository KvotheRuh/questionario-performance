import { useState } from "react";
import "./styles/global.css";
import Header from "./components/Header";
import ResumoPage from "./pages/ResumoPage";
import QuizPage from "./pages/QuizPage";

export default function App() {
  const [activeTab, setActiveTab] = useState("resumo");

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "resumo" ? <ResumoPage /> : <QuizPage />}
    </>
  );
}
