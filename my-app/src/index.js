import React from "react";
import ReactDOM from "react-dom";

// JSX
//always return single element
// use div/ section/ article or fragment<></>
// use camelCase for html attribute
// use ClassName instead of class
// close every Element
// formatting

function Greeting(){
  // return <h1>Hello Nice To meet you React</h1>//JSX
  return(
    <div>
      <div>
        <h1>This is me and Nice To meet you React</h1>
      </div>
      <div>
        <p>This is use single element example.</p>
      </div>
    </div>  
  );
}


// // React Such as Know
// function Greeting(){
//   // return React.createElement("h1",{},"Hello World");
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1",{},"Hello World")
//   );
// }

ReactDOM.render(<Greeting/>, document.getElementById("root"));