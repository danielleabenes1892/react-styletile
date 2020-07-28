import React from "react";
import './date_input.scss';

class DateInput extends React.Component {
      render() {
        return (
            <div className="date_input_container">
                <input type="date"></input>
            </div>
        );
      }
}

export default DateInput;