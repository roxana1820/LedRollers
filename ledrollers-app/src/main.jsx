import React from 'react';
import {Link} from 'react-router-dom';
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import './styles/globals.css';
import './styles/Products.css';
import Benefits from './components/Benefits';
import FeaturedProducts from './components/FeaturedProducts';
import MediaGallery from './components/MediaGallery';
import Footer from './components/Footer';
import Products from './components/Products';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <Router>
      <ScrollToTop/>
      <SidebarProvider open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <AppSidebar />
        <SidebarInset>
        <div className="app-content">
              <header className="header">
            
        <div
          className={`fixed z-50 top-5 left-0 md:top-[18px] ${isSidebarOpen ? 'md:left-[250px]' : 'md:left-2'}`}
        >
          <SidebarTrigger className="size-7 scale-120 md:size-8 md:scale-150" />
        </div>
            <Link to="/" className="ledrollers-logo">LedRollers</Link>
        </header>
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
            <Route
              path="/about"
              element={<About />}
            />
          </Routes>
          <Footer />
        </div>
        </SidebarInset>
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