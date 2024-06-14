import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    // console.log("convert to upper case" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  
  const hadlelwrclick = () => {
    // console.log("convert to lower case" + text);
    let myText = text.toLowerCase();
    setText(myText);
  };

  const handleOnchange = (event) => {
    console.log("on change");
    setText(event.target.value); //  TO INSERT NEW TEXT IN STATE
  };

  const handleclear = () => {
    let newText = "";
    setText(newText);
  };
  const handleinverseclick = () => {
    // console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
  };

  const [text, setText] = useState("enter the text here");
  return (
    <>
    <div>
      <h2>{props.header}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnchange}
          id="box"
          rows="8" placeholder="enter the text to convert"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>
        UPPERCASE
      </button>
      <button className="btn btn-info mx-2" onClick={hadlelwrclick}>
        LOWERCASE
      </button>
      <button className="btn btn-primary mx-2" onClick={handleclear}>CLEAR</button>
      <button className="btn btn-info mx-2" onClick={handleinverseclick}>INVERSE</button>
    </div>
    <div className="container">
      <h2>your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>

    </>
  );
}
