import React from "react";

const langs = ["html", "css", "js", "php", "java", "python"];

export class Task8 extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {langs.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Task8;
