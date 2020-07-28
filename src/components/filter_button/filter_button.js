import React from "react";
import './filter_button.scss';

class FilterButton extends React.Component {
      render() {
        return (
            <div className="filter_button_container">
                <ul>
                    {this.props.data.map(data => (
                        <li key={data.id} className={this.props.selected === data.id ? 'active' : ''}>{data[this.props.keyName]}</li>
                    ))}
                </ul>
            </div>
        );
      }
}

export default FilterButton;