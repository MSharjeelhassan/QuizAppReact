import 'bootstrap/dist/css/bootstrap.min.css';
import Quizscreen from './pages/Quizscreen';
import Result from './pages/Result';
import BAButton from './component/BAButton';


function App() {
  
  return (
    <>
      <Quizscreen />

      <Result className = 'd-non' number='6' outof='6' percentage='45' status='pass'/>
      
      </>
  )
}

export default App
