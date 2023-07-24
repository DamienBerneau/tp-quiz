
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import './App.css'
import User from './components/user'
import Quizz from "./components/Quizz";
import './components/Quizz.jsx'
import User from './components/user'
import './App.css'
import Quizz from "./components/Quizz";

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
<<<<<<< HEAD
        <User setUser={setUser} />
        <Header/>
        {/* <Menu /> */}
        <Main />
        <QuizPage />
    </div>
=======

        <User setUser={setUser} user={user} />

        <Quizz />
      </div>


      

>>>>>>> af63d456fddf87cf6fd6846530a23c3acb4fcbe5
    </>
  );
}

export default App;
