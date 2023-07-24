// import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import Quizz from "./pages/Quizz.jsx";
import { useState } from "react";
import "./App.css";
import User from "./components/User";
import Main from "./pages/Main.jsx";
import CountDown from "./pages/CountDown";
import Index from "./pages/Index";
import { Route, Routes } from "react-router";

function App() {
  const [user, setUser] = useState("");
  return (
    <>
      <div className="min-vh-100 min-vw-100">
        <Header user={user}/>
        <User setUser={setUser} />
        <Routes>
          <Route index element={< Index/>}></Route>
          <Route path="Main" element={<Main/>} />
          <Route path="CountDown" element={<CountDown/>}></Route>
          <Route path="Quizz" element={<Quizz/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
