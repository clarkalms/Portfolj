// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import './navbar.css';
// import { gsap } from 'gsap';

// class navbar extends Component {
// 	componentDidMount() {
// 		var prevScrollpos = window.pageYOffset;
// 		window.onscroll = function () {
// 			var currentScrollPos = window.pageYOffset;
// 			if (prevScrollpos >= currentScrollPos) {
// 				gsap.to('.navbar', {
// 					top: 0,
// 					background: '#tra',
// 					duration: 0.01,
// 				});
// 			} else if (currentScrollPos > 250) {
// 				gsap.to('.navbar', {
// 					top: -64,
// 					duration: 0.01,
// 				});
// 			}
// 			prevScrollpos = currentScrollPos;
// 		};
// 	}

// 	hamburgerOnClick = () => {
// 		document.body.classList.toggle('nav-menu-open');
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<nav className="navbar fixed-top navbar-expand-lg justify-content-center">
// 					<a className="navbar-logo" href="/" rel="noopener noreferrer">
// 						<span>Clark Alms</span>
// 					</a>
// 					<button
// 						className="navbar-toggler"
// 						type="button"
// 						data-toggle="collapse"
// 						data-target="#navbarNav"
// 						aria-controls="navbarNav"
// 						aria-expanded="false"
// 						aria-label="Toggle navigation"
// 						onClick={this.hamburgerOnClick}
// 					>
// 						{/* <img src={Logo} className="nav-logo-img" alt="logo"></img> */}
// 						<i class="fas fa-bars"></i>
// 					</button>
// 					<div className="collapse navbar-collapse" id="navbarNav">
// 						<ul className="navbar-nav page-links ml-auto">
// 							<li className="nav-item highlightTextIn">
// 								<Link
// 									to="/about"
// 									className={
// 										window.location.pathname === '/about'
// 											? 'nav-link active'
// 											: 'nav-link nav-link-about'
// 									}
// 									id="nav-link-about"
// 								>
// 									About
// 								</Link>
// 							</li>
// 							<li className="nav-item highlightTextIn">
// 								<Link
// 									to="/portfolio"
// 									className={
// 										window.location.pathname === '/portfolio'
// 											? 'nav-link active'
// 											: 'nav-link nav-link-portfolio'
// 									}
// 									id="nav-link-portfolio"
// 								>
// 									Portfolio
// 								</Link>
// 							</li>
// 							<li className="nav-item highlightTextIn">
// 								<Link
// 									to="/contact"
// 									className={
// 										window.location.pathname === '/contact'
// 											? 'nav-link active'
// 											: 'nav-link nav-link-contact'
// 									}
// 									id="nav-link-contact"
// 								>
// 									Contact
// 								</Link>
// 							</li>
// 						</ul>
// 						<ul className="navbar-nav ml-auto social-items">
// 							<li className="nav-item social-item github">
// 								<a
// 									rel="noopener noreferrer"
// 									target="_blank"
// 									aria-label="GitHub"
// 									className="socials-link github"
// 									href="https://github.com/clarkalms"
// 								>
// 									<i className="fab fa-github fa-2x"></i>
// 								</a>
// 							</li>
// 							<li className="nav-item social-item linkedin">
// 								<a
// 									rel="noopener noreferrer"
// 									target="_blank"
// 									aria-label="LinkedIn"
// 									className="socials-link linkedin"
// 									href="https://www.linkedin.com/in/clark-alms-794b7781/"
// 								>
// 									<i className="fab fa-linkedin fa-2x"></i>
// 								</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</nav>
// 			</div>
// 		);
// 	}
// }

// export default navbar;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { gsap } from 'gsap';

class navbar extends Component {
	componentDidMount() {
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos >= currentScrollPos) {
				gsap.to('.navbar', {
					top: 0,
					background: '#tra',
					duration: 0.01,
				});
			}
			// else if (currentScrollPos > 250) {
			// 	gsap.to('.navbar', {
			// 		top: -64,
			// 		duration: 0.01,
			// 	});
			// }
			prevScrollpos = currentScrollPos;
		};
	}

	hamburgerOnClick = () => {
		document.body.classList.toggle('nav-menu-open');
	};

	render() {
		return (
			<div>
				<nav className="navbar fixed-top navbar-expand-lg justify-content-center">
					<a className="navbar-logo" href="/" rel="noopener noreferrer">
						<span>Clark Alms</span>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={this.hamburgerOnClick}
					>
						{/* <img src={Logo} className="nav-logo-img" alt="logo"></img> */}
						<i class="fas fa-bars"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav page-links ml-auto">
							<li className="nav-item highlightTextIn">
								<a
									href="#home"
									className={
										window.location.pathname === '/'
											? 'nav-link active'
											: 'nav-link nav-link-about'
									}
									id="nav-link-home"
								>
									Home
								</a>
							</li>
							<li className="nav-item highlightTextIn">
								<a
									href="#about"
									className={
										window.location.pathname === '/about'
											? 'nav-link active'
											: 'nav-link nav-link-about'
									}
									id="nav-link-about"
								>
									About
								</a>
							</li>
							<li className="nav-item highlightTextIn">
								<a
									href="#portfolio"
									className={
										window.location.pathname === '/portfolio'
											? 'nav-link active'
											: 'nav-link nav-link-portfolio'
									}
									id="nav-link-portfolio"
								>
									Portfolio
								</a>
							</li>
							<li className="nav-item highlightTextIn">
								<a
									href="#contact"
									className={
										window.location.pathname === '/contact'
											? 'nav-link active'
											: 'nav-link nav-link-contact'
									}
									id="nav-link-contact"
								>
									Contact
								</a>
							</li>
						</ul>
						<ul className="navbar-nav ml-auto social-items">
							<li className="nav-item social-item github">
								<a
									rel="noopener noreferrer"
									target="_blank"
									aria-label="GitHub"
									className="socials-link github"
									href="https://github.com/clarkalms"
								>
									<i className="fab fa-github fa-2x"></i>
								</a>
							</li>
							<li className="nav-item social-item linkedin">
								<a
									rel="noopener noreferrer"
									target="_blank"
									aria-label="LinkedIn"
									className="socials-link linkedin"
									href="https://www.linkedin.com/in/clark-alms-794b7781/"
								>
									<i className="fab fa-linkedin fa-2x"></i>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default navbar;
