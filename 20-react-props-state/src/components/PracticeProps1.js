import { Component } from "react";

class FoodProps extends Component {
  render() {
    console.log(this.props);
    const divStyle = {
      color: this.props.color,
    };
    return (
      <div style={divStyle}>
        <h4>내가 좋아하는 음식은 {this.props.foodname}</h4>
      </div>
    );
  }
}
FoodProps.defaultProps = {
  foodname: "김치찌개",
};

class TextProps extends Component {
  // 클릭 이벤트 핸들러 함수
  handleClick = () => {
    // props로 전달된 valid 함수 호출
    this.props.valid();
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <br />
        <button onClick={this.handleClick}>버튼</button>
        <br />
      </div>
    );
  }
}
TextProps.defaultProps = {
  text: "이건 기본 text props입니다.",
};

export { FoodProps, TextProps };
