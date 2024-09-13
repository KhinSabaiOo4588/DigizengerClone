import React from "react";
import ReactDOM from "react-dom";

//JSX
// function Greeting(){
//   // return <h1>Hello Nice To meet you React</h1>//JSX
//   return(
//     <div>
//       <h1>This is me and Nice To meet you React</h1>
//     </div>
//   );
// }


// React Such as Know
function Greeting(){
  // return React.createElement("h1",{},"Hello World");
  return React.createElement(
    "div",
    {},
    React.createElement("h1",{},"Hello World")
  );
}

ReactDOM.render(<Greeting/>, document.getElementById("root"));