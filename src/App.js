
import './App.css';
import { Routes, Route } from "react-router-dom";
import { isMatchAlgorithm } from './helpers/isMatchAlgorithm';

function App() {

  let word = "abz"
  let pattern = "a!z"

  const TestMatch = () => (
    <div>
      <span className='block'>Word: {word}</span>
      <span className='block'>Pattern: {pattern}</span>
      {isMatchAlgorithm(pattern, word) ? "True" : "False"}
    </div>
  )
  return (
    <Routes>
      <Route path="/" element={<TestMatch/>} />
    </Routes>
  );
}

export default App;
