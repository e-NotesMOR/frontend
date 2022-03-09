import React from "react";

export default class Uploader extends React.Component {
	constructor () {
		super();
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		
		this.state = {
			fileName: ''
		};
	}
	
	handleSubmit (evt) {
		evt.preventDefault();
		console.log("submitted");
	}
	
	handleInputChange (evt) {
		this.setState({
			fileName: this.fileInput.value
				? this.fileInput.files[0].name
				: ''
		});
	}
	
	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				{
					this.state.fileName
						&& <h4 className="mb-4 text-dark">
								File: <span className="text-danger">{this.state.fileName}</span>
							</h4>
				}
				<label>
					<input type="file"
						onChange={this.handleInputChange}
						ref={input => this.fileInput = input}
						className="form-control" />
					<input type="submit" value="submit" className="form-control"  />
				</label>
				
			</form>
		);
	}
}
