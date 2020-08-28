import React, { Component } from 'react';
import WhiteL from '../../images/L_White.svg';
// import GreyL from '../../images/L_Grey.svg';
// import BlackL from '../../images/L_Black.svg';
import { gsap } from 'gsap';
import './header.css';

class header extends Component {
	componentDidMount() {
		console.log(document.getElementsByClassName('.white-l'));
		function animateTriangle() {
			// gsap.registerPlugin(TextPlugin);

			// var elements = document.body.getElementsByClassName(".white-l, grey-l, black-l"),

			// var tl = gsap.timeline({defauts:{duration: 3}});
			// var tl = gsap.timeline({ defaults: { duration: 2, ease: 'none' } });
			gsap.to('.gsap-animation', {
				duration: 3,
				rotationY: 360,
				repeat: false,
				yoyo: false,
				stagger: 0,
			});
			// gsap.defaults({ smoothOrigin: false });
			//very basic TimelineLite code to animate elements and change the text.
			//notice that both elements  (#divRectangle and #svgRectangle) both use the exact same tweens
			// tl.to(".white-l", {rotation:360, transformOrigin:"50% 50%"}, "+=1")
			// tl.to(".grey-l", {x: 100, y:200, duration: 1, delay: 4})
			// .to(".white-l", {rotation:"+=180", transformOrigin:"right bottom"})
			// .to(".grey-l", {scale:2, transformOrigin:"80px 120px"})
			// .to(".black-l", {scale:1, transformOrigin:"100% 0%"})
			// .to(".white-l", {scaleY:0, transformOrigin:"0% 50%"})
			// .to(".white-l", {scale:1, transformOrigin:"50% bottom"})
			// .to(".white-l", {scale:1, rotation:180, transformOrigin:"50% 50%"})
			// tl.to('.scramble', {
			// 	duration: 3,
			// 	scrambleText: {
			// 		text: 'ScrambleText allows you to animate the scrambling of text.',
			// 		chars: 'lowerCase',
			// 		revealDelay: 0.5,
			// 		tweenLength: false,
			// 	},
			// });

			// tl.play();
		}
		animateTriangle();
	}

	render() {
		return (
			<div className="header-wrapper container-fluid">
				<h1>Hello World!</h1>
			</div>
		);
	}
}

export default header;
