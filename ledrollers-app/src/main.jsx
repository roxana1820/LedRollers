import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="app-content">
        <Header />
        <Routes>
          <Route path="/" element={<Hero/>}/>
        </Routes>
      </div>
    </Router>
  );
}



const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App;