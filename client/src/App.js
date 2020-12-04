import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
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
import './Fonts.css';

function App() {
	const scroll = new SmoothScroll('.navbar, .logo-img-div, a[href*="#"]', {
		speed: 1000,
		clip: true,
	});
	return (
		// <Wrapper>
		// 	<Logo />
		// 	<Navbar />
		// 	<Home />
		// 	<About />
		// 	<Portfolio />
		// 	<Contact />
		// 	<Footer />
		// </Wrapper>

		<LandingPage />
	);
}

export default App;
