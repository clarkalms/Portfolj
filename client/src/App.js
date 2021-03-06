import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer/footer';
import Wrapper from './components/Wrapper/wrapper';
import Navbar from './components/Navbar/navbar';
import Logo from './components/Logo/logo';
import SmoothScroll from 'smooth-scroll';
import './App.css';

function App() {
	const scroll = new SmoothScroll('.navbar, .logo-img-div, a[href*="#"]', {
		speed: 800,
	});
	return (
		// <Router>

		//   <div className="app-content-container">
		//     <Wrapper>
		//       <Logo />
		//       <Navbar />
		//       <Route exact path="/" component={Home} />
		//       <Route exact path="/about" component={About} />
		//       <Route exact path="/portfolio" component={Portfolio} />
		//       <Route exact path="/contact" component={Contact} />
		//       <Footer />
		//     </Wrapper>
		//   </div>
		// </Router>
		<Wrapper>
			<Logo />
			<Navbar />
			<Home />
			<About />
			<Portfolio />
			<Contact />
			<Footer />
		</Wrapper>
	);
}

export default App;
