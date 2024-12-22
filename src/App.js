import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import StoneCategories from './pages/StoneCategories';
import Footer from './pages/Footer';

const Main = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="stoneCategories">
        <StoneCategories />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            {/* Other standalone routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/stoneCategories" element={<StoneCategories />} />
            <Route path="/footer" element={<Footer />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
