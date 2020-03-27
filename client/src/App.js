import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/footer";
import Wrapper from "./components/Wrapper/wrapper";
import Navbar from './components/Navbar/navbar';
import './App.css';

function App() {
  return (
      <Router>
      
        <div className="app-content-container">
          <Wrapper>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Footer />
          </Wrapper>
        </div>
      </Router>
  );
}

export default App;
