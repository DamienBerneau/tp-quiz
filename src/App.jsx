
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import User from './components/user'
import Quizz from "./components/Quizz";
import './components/Quizz.jsx'
import './App.css'

// import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react';
import './App.css'
import Main from './components/Main.jsx'
import QuizPage from './components/QuizPage.jsx'
import Header from './components/Header.jsx'
import User from './components/user.jsx'

function App() {
  const [user, setUser] = useState('')
  return (
    <>
      <div className='min-vh-100 min-vw-100'>
        <Header user={user} />
        <User setUser={setUser} />
        <Header/>
        <Main />
        <QuizPage />
        <Quizz />
      </div>
    </>
  );
}

export default App;
