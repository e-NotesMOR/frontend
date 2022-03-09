import React from "react";
import { Collapse } from "react-collapse";
import { FaUsers} from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./SideNav.css"

export default class DropdownItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    isDropdownOpen: false,
    dropdownToggleIcon: "▼",
    hover : "btn btn-primary p-1 navbutton"
  }}

  onDropdownClicked = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
      dropdownToggleIcon: prevState.dropdownToggleIcon === "▼" ? "▲" : "▼",
      hover: prevState.hover === "btn btn-primary p-1 navbutton" ? "btn btn-primary p-1 navbutton" : "btn btn-primary p-1 navbutton"
    }));
  };  


  render() {
    return (
      <div id={this.props.id}>
        <div class="pb-2">
          
          <button className={this.state.hover} >
            <div class="row">
              <Link class="col textdecor" to="/menu/section1">
                <FaUsers className='Fausers mx-3' />
                {this.props.title}
              </Link>
              <div class="col-lg-2" onClick={this.onDropdownClicked} >
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

