import React, { Component } from 'react';
import LogoImg from '../../images/penrose.svg';
import { gsap } from 'gsap';
import './logo.css';

class Logo extends Component {
	componentDidMount() {
		gsap.to('.logo-img', {
			duration: 3,
			rotationY: 360,
			repeat: false,
			yoyo: false,
			stagger: 0,
		});
		//     function animateLogo() {

		//     // var tl = gsap.timeline({defauts:{duration: 3}});
		//     var tl = gsap.timeline({defaults: {duration: 2, ease: "none", yoyo: true}});
		//     tl.to(".logo-img", {rotationZ: 360, transformOrigin:"50% 50%"}, "+=1")
		//     tl.play();

		// }

		// animateLogo();

		// const logoHover = () => {
		//     $('.logo-img-div').hover(
		//         function() {
		//             gsap.to()
		//         }
		//     )
		// }

		window.onscroll = function () {
			console.log('hello');
			var prevScrollpos = window.pageYOffset;
			var currentScrollPos = window.pageYOffset;
			console.log('hello');
			if (prevScrollpos >= currentScrollPos) {
				gsap.to('.logo-img', {
					duration: 3,
					rotationY: 360,
					repeat: 1,
					yoyo: false,
					stagger: 0,
				});
			} else if (currentScrollPos > 250) {
			}
			prevScrollpos = currentScrollPos;
		};
	}
	render() {
		return (
			<div className="logo-img-div fixed-top">
				<a href="#home" className="logo-img-link">
					<img src={LogoImg} className="logo-img" alt="logo"></img>
				</a>
			</div>
		);
	}
}

export default Logo;
