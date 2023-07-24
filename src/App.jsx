import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import User from './components/user'
import './App.css'
import Quizz from "./components/Quizz";


function App() {
  return (
    <>
      <div className='min-vh-100 min-vw-100'>
        <Header />
        <User />
        <Quizz />
      </div>
    </>
  );
}

export default App;
