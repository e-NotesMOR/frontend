import React from "react";
import { Collapse } from "react-collapse";
import "./../Css/SideNav.css"
import { FaEllipsisH } from "react-icons/fa"

export default class DropdownOption extends React.Component {
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
          <div onClick={this.onDropdownClicked} >
                {/* {this.state.dropdownToggleIcon} */}
                <FaEllipsisH style={{fontSize:"2rem"}}/>
          </div>


        <Collapse isOpened={this.state.isDropdownOpen}>
          <div>{this.props.children}</div>
        </Collapse>

      </div>
    );
  }
}

