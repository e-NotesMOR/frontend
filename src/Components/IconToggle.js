import React from "react";
import "./../Css/SideNav.css"

export default class IconToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    isDropdownOpen: false,
    dropdownToggleIcon: "Edit",
    disabled: "disabled",
  }}

  onClicked = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
      dropdownToggleIcon: prevState.dropdownToggleIcon === "Edit" ? "Save" : "Edit",
      disabled: prevState.disabled === "disabled" ? "" : "disabled",
    
    }));
  };  

  


  render() {
    return (
      <button className="toggle " onClick={this.onClicked} >
        {this.state.dropdownToggleIcon}
      </button>
    );
  }
}

