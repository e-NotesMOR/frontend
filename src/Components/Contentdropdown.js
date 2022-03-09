import React from "react";
import { FaBook} from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./../Css/SideNav.css"

export default class Contentdropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    hover : "btn btn-outline-light roomtext btnroom w-100"
  }}

  onDropdownClicked = () => {
    this.setState((prevState) => ({
      hover: prevState.hover === "btn btn-outline-light roomtext btnroom w-100" ? "btn btn-outline-light roomtext btnhover w-100" : "btn btn-outline-light roomtext btnroom w-100"
    }));
  };  


  render() {
    return (
      <div id={this.props.id}>
        <div className="pb-2">
          
          <button className={this.state.hover} >
            <div className="row">
              <Link className="col textdecor" to={`/menu/${this.props.id}`}>
                <FaBook className='Fausers mx-3' />
                {this.props.title}
              </Link>
            </div>
          </button>
        </div>

      </div>
    );
  }
}

