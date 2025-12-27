import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import './styles/globals.css';
import Benefits from './components/Benefits';
import FeaturedProducts from './components/FeaturedProducts';
import MediaGallery from './components/MediaGallery';
function App() {
  return (
    <Router>
      <div className="app-content">
        <Header />
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/products" element={<FeaturedProducts/>}/>
        </Routes>
        <Benefits />
        <FeaturedProducts/>
        <MediaGallery/>
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