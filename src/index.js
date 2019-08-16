import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//this is mine
function Nandhini() {
  return (
    <div className="eyebrow">
      <h1>Welcome To our Daily Cookbook</h1>
      <h3>Please enter your recipes</h3>
      <input type="text" />
      <input type="button" value="Add" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Nandhini />, rootElement);
