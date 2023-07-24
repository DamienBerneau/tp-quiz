// import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import Quizz from "./pages/Quizz.jsx";
import { useState } from "react";
import "./App.css";
import User from "./components/user";
import Main from "./components/Main.jsx";
import QuizPage from "./components/QuizPage.jsx";

function App() {
  const [user, setUser] = useState("");
  return (
    <>
      <div className="min-vh-100 min-vw-100">
        <Header user={user} />
        <User setUser={setUser} />
        <Main />
        <QuizPage />
        <Quizz />
      </div>
    </>
  );
}

export default App;
