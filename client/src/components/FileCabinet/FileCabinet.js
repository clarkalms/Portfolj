import React, { Component } from 'react';
import CabinetHandle from './CabinetHandle';
import CabinetLabel from './CabinetLabel';
import './FileCabinet.css';

class FileCabinet extends Component {
	render() {
		return (
			<div className="file-cabinet-main">
				<CabinetLabel />
				<CabinetHandle />
			</div>
		);
	}
}

export default FileCabinet;
