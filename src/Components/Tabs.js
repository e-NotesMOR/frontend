import React, { Component } from "react";
import "./../Css/Tabs.css"

class Tabs extends Component {
  state = {
    selected: this.props.selected || 0
  };

  handleChange(index) {
    this.setState({ selected: index });
  }

  render() {
    return (
      <div className="container-fluid">
        <ul className="tabUL">
          {this.props.children.map((elem, index) => {
            let style = index === this.state.selected ? "tabLI selected" : " tabLI ";
            return (
                    <li
                        key={index}
                        className={style}
                        onClick={() => this.handleChange(index)}
                    >
                        {elem.props.title}
                    </li>
            );
          })}
        </ul>
  
            <div className="tab">{this.props.children[this.state.selected]}</div>

      </div>
    );
  }
}

export default Tabs;
