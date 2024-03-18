// 실습1

import { Component } from "react";

class ClassStatePrac extends Component {
  state = {
    num: 0,
  };
  plus = () => {
    this.setState({ num: this.state.num + 2 });
  };

  minus = () => {
    this.setState({ num: this.state.num - 1 });
  };
  render() {
    const { num } = this.state;
    return (
      <div>
        <button onClick={this.plus}>+2</button>
        <button onClick={this.minus}>-1</button>
        <p>{this.state.num}</p>
      </div>
    );
  }
}

export default ClassStatePrac;
