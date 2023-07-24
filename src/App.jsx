// import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import User from './components/user'
import './App.css'
import Quizz from "./components/Quizz";
import Main from './components/Main.jsx'


function App() {
  return (
    <>
      <div className='min-vh-100 min-vw-100'>
        <Header />
        <User />
        <Head/>
        <Menu />
        <Main />
        <Quizz />
      </div>
    </>
  );
}

export default App;
