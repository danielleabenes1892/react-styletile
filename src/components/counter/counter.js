import React from "react";
import './counter.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    
      increment() {
        this.setState({
          count: this.state.count + 1
        });
      };
      
      decrement() {
        if (this.state.count !== 0) {
            this.setState({
                count: this.state.count - 1
            });
        }
      };

      render() {
        return (
          <div className="counter_container">
            <button className='dec' onClick={(e) => this.decrement(e)}></button>
            <span>{this.state.count}</span>
            <button className='inc' onClick={(e) => this.increment(e)}></button>
          </div>
        );
      }
}

export default Counter;