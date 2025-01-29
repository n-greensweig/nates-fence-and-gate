// App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css'; // CSS import

// View imports
import About from '../Views/About/About';
import Faq from '../Views/FAQ/FAQ';
import FenceDetails from '../Views/FenceDetails/FenceDetails';
import FenceTypes from '../Views/FenceTypes/FenceTypes';
import InstantQuote from '../Views/InstantQuote/InstantQuote';
import LandingPage from '../Views/LandingPage/LandingPage';
import Navbar from '../Components/Navbar/Navbar';
import CedarDetails from '../Views/CedarDetails/CedarDetails';
import Footer from '../Components/Footer/Footer';
// import NotFound from '../Views/NotFound/NotFound'; // Optional: Create a NotFound component

function App() {
  return (
    <div className="App">

      {/* Switched to BrowserRouter */}
      <Router>
        <Navbar />
          {/* Define all routes within Routes */}
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/about" element={<About />} />

            <Route path="/faq" element={<Faq />} />

            <Route path="/fence-types" element={<FenceTypes />} />

            <Route path="/fence-details/:type" element={<FenceDetails />} />

            <Route path="/fence-details/cedar" element={<CedarDetails />} />

            <Route path="/quote" element={<InstantQuote />} />

            {/* 404 Route: Catch all unmatched routes */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
