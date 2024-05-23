import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import ContactPage from './components/pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import FishingCalcuator from './components/pages/FishingCalculator';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/fishing-calculator" element={<FishingCalcuator />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;