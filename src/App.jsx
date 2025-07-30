import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Guiding from './Components/Guiding';
import Highlight from './Components/Highlight';
import About from './Components/About';
import HowItWorks from './Components/HowItWorks';
import PrivacyPolicy from './Components/Privacypolicy/PrivacyPolicy'; // <-- Your component
import TermsAndConditions from './Components/Terms&Conditions/TermsAndConditions';

function HomePage() {
  return (
     <>
      <Header />
      <Guiding />
      <Highlight />
      <div id="/#about">
        <About />
      </div>
      <div id="/#how-it-works">
        <HowItWorks />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} /> Optional
      </Routes>
     
    </Router>
  );
}

export default App;
