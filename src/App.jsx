import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import './App.css'
import Menu from './components/Menu'
import Quizz from "./components/Quizz";

function App() {
  return (
    <>
      <Header></Header>
      <Menu />
      <Quizz />
    </>
  );
}

export default App;
