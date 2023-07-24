
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import User from './components/user'
import Quizz from "./pages/Quizz";
import Main from './components/Main.jsx'
import QuizPage from './components/QuizPage.jsx'
import './App.css'

function App() {
  const [user, setUser] = useState('')
  return (
    <>
      <div className='min-vh-100 min-vw-100'>
        <Header user={user} />
        <User setUser={setUser} />
        <Header />
        <Main />
        <QuizPage />
        <Quizz />
      </div>
    </>
  );
}

export default App;
