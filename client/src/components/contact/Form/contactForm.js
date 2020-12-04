import React from 'react';
import './contactForm.css';

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
		};
	}

	render() {
		return (
			<div className="contact-form">
				<div className="top-border">
					<p className="title">drop a line</p>
				</div>
				<div>
					<h1>HELLO,</h1>
				</div>
				<form
					id="contact-form"
					onSubmit={this.handleSubmit.bind(this)}
					method="POST"
				>
					<div className="descriptor-div">
						<h1 className="descriptor">MY</h1>
						<h1>NAME</h1>
						<h1>IS</h1>
					</div>
					<div className="form-group">
						{/* <label htmlFor="name">MY NAME IS</label> */}

						<input
							type="text"
							className="form-control"
							value={this.state.name}
							onChange={this.onNameChange.bind(this)}
						/>
					</div>
					<div className="descriptor-div">
						<h1 className="descriptor">HERE IS MY EMAIL</h1>
					</div>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							aria-describedby="emailHelp"
							value={this.state.email}
							onChange={this.onEmailChange.bind(this)}
						/>
					</div>
					<div className="form-group">
						<div className="descriptor-div">
							<h1 className="descriptor">THIS IS MY MESSAGE</h1>
						</div>
						<div>
							<textarea
								className="form-control"
								rows="3"
								value={this.state.message}
								onChange={this.onMessageChange.bind(this)}
							/>
						</div>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		);
	}

	onNameChange(event) {
		this.setState({ name: event.target.value });
	}

	onEmailChange(event) {
		this.setState({ email: event.target.value });
	}

	onMessageChange(event) {
		this.setState({ message: event.target.value });
	}

	handleSubmit(event) {}
}

export default ContactForm;
