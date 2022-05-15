import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom"; 
import ViewWordsView from './views/ViewWordsView';
import AddWordsView from './views/AddWordsView';
import FilterWordsView from './views/FilterWordsView'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<ViewWordsView />} />
      <Route path="/add" element={<AddWordsView />} />
      <Route path="/filter" element={<FilterWordsView />} />
    </Routes>
  );
}

export default App;
