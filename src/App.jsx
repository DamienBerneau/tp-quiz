
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
// import './App.css'
import User from './components/user'
import './App.css'
import Quizz from "./components/Quizz";

// import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import User from './components/user'
import Quizz from "./components/Quizz";
import Main from './components/Main.jsx'


function App() {
  const [user, setUser] = useState('')
  return (
    <>
      <div className='min-vh-100 min-vw-100'>
        <Header user={user} />

        <User setUser={setUser} user={user} />

        <Quizz />
      </div>


      

    </>
  );
}

export default App;
