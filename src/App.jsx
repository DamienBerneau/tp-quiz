import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import User from './components/User.jsx'
// import './App.css'
// import Menu from './components/Menu'
import Quizz from "./components/Quizz";
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('')
  return (
    <>
      <div className='min-vh-100 min-vw-100'>
        <Header user={user} /> 
        <User setUser={setUser} />
        <Quizz />
      </div>
      <div>
        {/* <Menu /> */}

      </div>
    </>
  );
}

export default App;
