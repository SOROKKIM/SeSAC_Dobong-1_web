import { Component } from "react";

class MyComponent extends Component {
  // 마운트 되었을때
  componentDidMount() {
    console.log("class component, mount됨!");
  }
  // update 되었을때
  componentDidUpdate() {
    console.log("class component, update됨!");
  }
  // upmount 예정일때
  componentWillUnmount() {
    console.log("class component, upmount됨!");
  }

  render() {
    return <p>My Component {this.props.number}</p>;
  }
}

class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };
  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };
  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>number + 1</button>
        <button onClick={this.changeVisibleState}>on/off</button>
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}
export default LifeCycleClass;
