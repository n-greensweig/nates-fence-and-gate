import logo from '../logo.svg';
import {
  HashRouter as Router,
  Route,
  Routes
} from 'react-router-dom'; // import for routing
import './App.css'; // CSS import

// View imports
import About from '../Views/About/About';
import Faq from '../Views/FAQ/FAQ';
import FenceDetails from '../Views/FenceDetails/FenceDetails';
import FenceTypes from '../Views/FenceTypes/FenceTypes';
import InstantQuote from '../Views/InstantQuote/InstantQuote';
import LandingPage from '../Views/LandingPage/LandingPage';

function App() {
  return (

    <Router>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Testing <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

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

        <Route exact path="/fence-details">
          <FenceDetails />
        </Route>

        <Route exact path="/quote">
          <InstantQuote />
        </Route>

        {/* If none of the other routes matched, we will show a 404. */}
        {/* <Route>
          <h1>404</h1>
        </Route> */}

      </div>
    </Router >
  );
}

export default App;
