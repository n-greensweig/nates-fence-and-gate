import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'; // import for routing
import './App.css'; // CSS import

// View imports
import About from '../Views/About/About';
import Faq from '../Views/FAQ/FAQ';
import FenceDetails from '../Views/FenceDetails/FenceDetails';
import FenceTypes from '../Views/FenceTypes/FenceTypes';
import InstantQuote from '../Views/InstantQuote/InstantQuote';
import LandingPage from '../Views/LandingPage/LandingPage';
import Navbar from '../Components/Navbar/Navbar'
import CedarDetails from '../Views/CedarDetails/CedarDetails';
import Footer from '../Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/faq">
          <Faq />
        </Route>

        <Route exact path="/fence-types">
          <FenceTypes />
        </Route>

        <Route exact path="/fence-details/:type">
          <FenceDetails />
        </Route>

        <Route exact path="/fence-details/cedar">
          <CedarDetails />
        </Route>

        <Route exact path="/quote">
          <InstantQuote />
        </Route>

        {/* If none of the other routes matched, we will show a 404. */}
        {/* <Route>
          <h1>404</h1>
        </Route> */}


        <Footer />
      </Router >

    </div>
  );
}

export default App;
