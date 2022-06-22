import Calculator from './Component/Calculator';
import { useContext } from 'react'
import { CalcContext } from './Context/CalcContext'
import { CalcProvider } from './Context/CalcContext';
import './App.css';

function App() {
  return (
    <div className="App">
   <Calculator />
    </div>
  );
}

export default App;
