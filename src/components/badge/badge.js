import React from "react";
import './badge.scss';

class Badge extends React.Component {
      render() {
        return (
            <div className="badge_container">
                <label style={this.props.style} className={this.props.type}>{this.props.label}</label>
            </div>
        );
      }
}

export default Badge;