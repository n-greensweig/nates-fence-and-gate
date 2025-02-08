// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';

import About from '../Views/About/About';
import Faq from '../Views/FAQ/FAQ';
import FenceDetails from '../Views/FenceDetails/FenceDetails';
import FenceTypes from '../Views/FenceTypes/FenceTypes';
import InstantQuote from '../Views/InstantQuote/InstantQuote';
import LandingPage from '../Views/LandingPage/LandingPage';
import Navbar from '../Components/Navbar/Navbar';
import CedarDetails from '../Views/CedarDetails/CedarDetails';
import Footer from '../Components/Footer/Footer';

function App() {
  // Determine the canonical URL based on the environment.
  const canonicalUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://www.natesfenceandgate.com'
      : window.location.origin;

  // Global structured data for the local business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nate's Fence & Gate",
    "image": "https://www.natesfenceandgate.com/images/logos/nates-logo.webp",
    "telephone": "612-702-8681",
    "url": "https://www.natesfenceandgate.com",
    "areaServed": [
      "Blaine",
      "Lexington",
      "Brooklyn Center",
      "Lino Lakes",
      "Brooklyn Park",
      "Minneapolis",
      "Circle Pines",
      "New Brighton",
      "Columbia Heights",
      "Richfield",
      "Coon Rapids",
      "Robbinsdale",
      "Crystal",
      "Roseville",
      "Falcon Heights",
      "Shoreview",
      "Fridley",
      "St. Louis Park",
      "Golden Valley",
      "White Bear Lake"
    ]
  };

  return (
    <div className="App">
      <Helmet>
        {/* Set the canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        {/* Inject the structured data into the document head */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/fence-types" element={<FenceTypes />} />
          <Route path="/fence-details/:type" element={<FenceDetails />} />
          <Route path="/fence-details/cedar" element={<CedarDetails />} />
          <Route path="/quote" element={<InstantQuote />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
