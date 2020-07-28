import React from "react";
import './btn_icon.scss';

class ButtonIcon extends React.Component {
      render() {
        return (
            <div className="button_icon_container">
                <img src={this.props.image} alt="icon"/>
                <span>{this.props.label}</span>
            </div>
        );
      }
}

export default ButtonIcon;