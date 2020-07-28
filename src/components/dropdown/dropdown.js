import React from "react";
import './dropdown.scss';

class Dropdown extends React.Component {
      render() {
        if (!this.props.data) return null;
        return (
            <div className="dropdown_container">
                <select>
                    {this.props.data.map(data => (
                        <option key={data}>{data}</option>
                    ))}
                </select>
            </div>
        );
      }
}

export default Dropdown;