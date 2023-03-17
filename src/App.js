import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  // const Button = (props) => <button style={props.style}>Click me</button>;
  // const Text = (props) => <p style={props.style}> Text</p>;

  // const StyleButton = LearnHOC(Button);
  // const StylText = LearnHOC(Text);

  return (
    <div>
      {/* <StyleButton />
      <StylText /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
