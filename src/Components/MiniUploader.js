import React from "react";
import {FaDownload } from "react-icons/fa"
export default class MiniUploader extends React.Component {
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

				<div className="row"> 
					<div className="col-11">
					{
						this.state.fileName
							&& <div className="mb-4 text-dark">
									<span className="text-dark">{this.state.fileName}</span>
								</div>
					}
					</div>
					<div className="col-1">
					<	div className="image-upload">
                                        <label htmlFor="file-input" className='pointer'>
                                            <FaDownload style={{fontSize:"1.5rem"}}/>
                                        </label>

										<input type="file"
											id="file-input"
											onChange={this.handleInputChange}
											ref={input => this.fileInput = input}
											className="form-control" />
                                    
                                    </div>
				
					</div>

				</div>
			</form>
		);
	}
}
