import React from "react";
import { Collapse } from "react-collapse";
import { FaUsers} from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./../Css/SideNav.css"

export default class DropdownItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    isDropdownOpen: false,
    dropdownToggleIcon: "▼",
    hover : "btn btn-outline-light roomtext btnroom w-100"
  }}

  onDropdownClicked = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
      dropdownToggleIcon: prevState.dropdownToggleIcon === "▼" ? "▲" : "▼",
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
                <FaUsers className='Fausers mx-3' />
                {this.props.title}
              </Link>
              <div className="col-lg-2 textdecor " onClick={this.onDropdownClicked} >
                {this.state.dropdownToggleIcon}
              </div>
            </div>
          </button>
        </div>

        <Collapse isOpened={this.state.isDropdownOpen}>
          <div>{this.props.children}</div>
        </Collapse>

      </div>
    );
  }
}

