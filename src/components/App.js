import React from "react";
import "../styles/App.css";

const Button = () => {
  const bgColors = {
    primary: "rgb(0, 123, 255)",
    secondary: "rgb(108, 117, 125)",
    success: "rgb(40, 167, 69)",
    danger: "rgb(220, 53, 69)",
    warning: "rgb(255, 193, 7)",
    info: "rgb(23, 162, 184)",
    light: "rgb(248, 249, 250)",
    dark: "rgb(52, 58, 64)",
  };
  const textColors = {
    primary: "rgb(255, 255, 255)",
    secondary: "rgb(255, 255, 255)",
    success: "rgb(255, 255, 255)",
    danger: "rgb(255, 255, 255)",
    warning: "rgb(0, 0, 0)",
    info: "rgb(255, 255, 255)",
    light: "rgb(0, 0, 0)",
    dark: "rgb(255, 255, 255)",
  };
  return (<></>);
};

const App = () => {
  const [currentVariant, setCurrentVariant] = React.useState("primary");

  const handleVariantChange = (e) => {
    setCurrentVariant(e.target.value);
  };
  return (
    <div id="main">
      <div className="cont">
        <h1>Select the button variant</h1>
        <select
          onChange={handleVariantChange}
          className="dropdown"
          id="variant"
        >
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="success">Success</option>
          <option value="danger">Danger</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div className="cont">
        <Button variant={currentVariant}>
          {" "}
          This is {currentVariant} button{" "}
        </Button>
      </div>
    </div>
  );
};

export default App;
