import { Button } from "antd";
import React from "react";

class Task7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      name: "Николай",
    };
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick() {
    let show = !this.state.show;
    this.setState({ show });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handlerClick}>Нажми меня!</Button>
        <div><p>{this.state.show ? 'Привет, ' + this.state.name : 'Пока, '+this.state.name}</p></div>
      </div>
    );
  }
}

export default Task7;