import React, { Component } from 'react';
import Frame from '../../images/frame.png';
import './CabinetLabel.css';

class CabinetLabel extends Component {
	render() {
		return (
			<div className="label-frame">
				<div className="frame-img-wrapper">
					<img src={Frame} className="frame-img" />
					<div className="label">
						<div className="label-section-name">
							<div className="label-name">NAME:</div>
							<div className="name">clark alms</div>
						</div>
						<div className="label-section-title">
							<div className="label-title">TITLE:</div>
							<div className="title">software engineer</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CabinetLabel;
