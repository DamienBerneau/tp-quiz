import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'


// import './App.css'
// import Menu from './components/Menu'

import User from './components/user'
import './App.css'

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
