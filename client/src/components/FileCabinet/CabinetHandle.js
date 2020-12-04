import React, { Component } from 'react';
import Handle from '../../images/handle.png';
import './CabinetHandle.css';
export default class CabinetHandle extends Component {
	render() {
		return (
			<div className="handle-lever-wrapper">
				<div className="lever"></div>
				<div className="handle">
					<img src={Handle} className="handle-img"></img>
					<div className="click-div" />
				</div>
			</div>
		);
	}
}
