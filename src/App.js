import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import Archive from './pages/archive';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/archive' element={<Archive />} />
      </Routes>
    </div>
  );
}
