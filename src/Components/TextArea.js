import React from "react";


export default class Decription extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.val,
			
			rows: 1,
			minRows: 1,
			maxRows: 100,
		};
	}

	
	handleChange = (event) => {
		const textareaLineHeight = this.props.lineheight;
		const { minRows, maxRows } = this.state;
		
		const previousRows = event.target.rows;
  	event.target.rows = minRows; // reset number of rows in textarea 
		
		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    
    if (currentRows === previousRows) {
    	event.target.rows = currentRows;
    }
		
		if (currentRows >= maxRows) {
			event.target.rows = maxRows;
			event.target.scrollTop = event.target.scrollHeight;
		}
    
  	this.setState({
		val: event.target.value,
		value: this.props.val,
      rows: currentRows < maxRows ? currentRows : maxRows,
    });
	};
	
	render() {
		return (
			<>
			<textarea
				rows={this.state.rows}
				value={this.props.val}
				placeholder={this.props.placeholder}
				className={this.props.css}
				onChange={this.handleChange}
			/>
			{console.log(this.state.value)}
			</>
		);
	}
}


