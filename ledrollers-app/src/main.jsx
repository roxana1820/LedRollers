import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import './styles/globals.css';
import Benefits from './components/Benefits';
import FeaturedProducts from './components/FeaturedProducts';
import MediaGallery from './components/MediaGallery';
import Footer from './components/Footer';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppSidebar />
        <div className="app-content">
          <SidebarTrigger />
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <Benefits />
                  <FeaturedProducts />
                  <MediaGallery />
                </>
              } 
            />

            <Route 
              path="/products/:productId" 
              element={<Products />} 
            />
          </Routes>
          <Footer />
        </div>
      </SidebarProvider>
    </Router>
  );
}



const rootEl = document.getElementById('root');
if (rootEl && !rootEl._root) {
  const root = createRoot(rootEl);
  rootEl._root = root;
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else if (rootEl?._root) {
  rootEl._root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App;