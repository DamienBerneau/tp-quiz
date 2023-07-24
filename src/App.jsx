import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css'
import Main from './components/Main'
import QuizPage from './components/QuizPage'
import Header from './components/Header'
import User from './components/user'
import Quizz from "./pages/Quizz";
import CountDown from './pages/CountDown';


function App() {
  const [user, setUser] = useState('')
  return (
    <>
      <div className='min-vh-100 min-vw-100'>
        <Header user={user} />
        <User setUser={setUser} />
        <Main />
        <QuizPage />
        <Routes>
          <Route path="CountDown" component={<CountDown />} />
          <Route path="Quizz" component={<Quizz />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
