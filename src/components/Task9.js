import React from "react";

const digits = [3, 5, 2, 8, 11, 24, -3];

export class Task9 extends React.Component {
  render() {
    return (
      <div>
          {digits.map((item) => {
              return <span key={item}> {item+3+", "} </span>
          })}
      </div>
    );
  }
}

export default Task9;