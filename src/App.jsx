import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import './App.css'
import User from './components/user'
import Quizz from "./components/Quizz";
import './components/Quizz.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Main from './components/Main.jsx'
import QuizPage from './components/QuizPage.jsx'


function App() {
  const [user, setUser] = useState('')
  return (
    <>
      <div className='min-vh-100 min-vw-100'>
        <Header user={user} />

        <User setUser={setUser} />
        <Main/>
        <Quizz/>
        <QuizPage />
    </div>
    </>
  );
}

export default App;
