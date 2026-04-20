import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import CardStack from './Components/CardStack';
import AboutSection from './Components/About';
import MarqueeSection from './Components/MarqueeSection';
import ExpertiseCards from './Components/ExpertiseCards';
import ContentScoort from './Components/ContentScoort';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-[#F9F6F0]">
        <ScrollToTop />
        <Navbar />
        <ToastContainer 
          position="top-center" 
          autoClose={2000} 
          hideProgressBar={false} 
          newestOnTop={false} 
          closeOnClick 
          rtl={false} 
          pauseOnFocusLoss 
          draggable 
          pauseOnHover 
          theme="colored" 
        />
        <Hero />
        <CardStack />
        <AboutSection />
        <ExpertiseCards />
        <ContentScoort />
        <MarqueeSection />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;