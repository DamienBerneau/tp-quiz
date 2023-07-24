
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Quizz from "./components/Quizz";
import { useState } from 'react';
import './App.css'
import User from './components/user'
import Main from './components/Main.jsx'


function App() {
  const [user, setUser] = useState('')
  return (
    <>
      <div className='min-vh-100 min-vw-100'>
        <Header user={user} />

        <User setUser={setUser} />

        <Quizz />
      </div>


      

    </>
  );
}

export default App;
