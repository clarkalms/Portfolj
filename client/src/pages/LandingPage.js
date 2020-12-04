import React, { Component } from 'react';
import FileCabinet from '../components/FileCabinet/FileCabinet';
class LandingPage extends Component {
	render() {
		return (
			<section className="home-page-wrapper" id="home">
				<FileCabinet />
			</section>
		);
	}
}

export default LandingPage;
