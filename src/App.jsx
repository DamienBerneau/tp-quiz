// import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import User from './components/user'
import './App.css'
import Menu from './components/Menu'
import Quizz from "./components/Quizz";
import Main from './components/Main.jsx'

function App() {
  return (
    <>
      <div className='min-vh-100 min-vw-100'>
        <Header />
        <User />
        <Menu />
        <Main />
        <Quizz />
      </div>
    </>
  );
}

export default App;
