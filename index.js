import React from "react";
import  ReactDOM  from "react-dom/client";
import Cart from "./Cart";
function Hello ()
{
  return (
    <div>
      <Cart></Cart>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello/>);
//import Demo1 from "./Demo1";
//import Demo from "./Demo";

//import App from "./App";
/*import App1 from "./App1";
import App2 from "./App2";
 function Travel()
 {
  return(
    <div>
      <h1 style={{color:"blue"}}>Travel by bus or car</h1>
      <App2></App2>
      <App1></App1>
    </div>
  );
 }*/
 /*function MyButton()
 { 
  return (
            <Demo1></Demo1>
          )
 }
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<MyButton/>);*/
