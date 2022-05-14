import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom"; 
import ViewWordsView from './views/ViewWordsView'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<ViewWordsView />} /> 
    </Routes>
  );
}

export default App;
