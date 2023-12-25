import React, { useState } from "react";

export default function Textform(props) {
 // console.log(props.mode);
  const handleclick = (event) => {
    // console.log("onclick on");
    setText(event.target.value);
  };
  const handleclick1 = (event) => {
    // console.log("onclick on");
    fsetText(event.target.value);
  };

  const handleclick2 = (event) => {
    // console.log("onclick on");
    rsetText(event.target.value);
  };

  const handleUpClick = (event) => {
    const newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("coverted to UpperCase","success");
  };
  const handleDownClick = (event) => {
    const newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("coverted to LowerCase","success");

  };
  const clearText = (event) => {
    const newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared","success");

  }; 
  const copyText = (event) => {
    let d = document.getElementById("mytext");
    d.select();
    navigator.clipboard.writeText(text);
    props.showAlert("copy to ClipBoard","success");

  };
  const ReplaceText = (event) => {
    const newtext = text.replaceAll(ftext, rtext);
    setText(newtext);
    props.showAlert(ftext+"Replaced to "+rtext,"success");

  };
  const RemoveExtraSpace = (event) => {
    const newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra space Removed","success");

  };

  const [text, setText] = useState("");
  const [ftext, fsetText] = useState("");
  const [rtext, rsetText] = useState("");

  // text="conceput_clear" //wrong way
  // setText("coneptu_clar") //correct way
  return (
    <>
      <div>
        <div className="mb-3" style={{
              color:(props.mode === "light")? "#2e427bba" : "white",
            }}>
          <h1>Enter you Text Below </h1>
          <textarea
            id="mytext"
            className="form-control "
            value={text}
            onChange={handleclick}
            rows="8"
            style={{
              backgroundColor:(props.mode === "dark")? "#2e427bba" : "white",
              color:(props.mode === "light")? "#2e427bba" : "white",
               
            }}
          
            placeholder="Enter your text here"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={clearText}>
          ClearText
        </button>
        <button className="btn btn-primary mx-2" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={RemoveExtraSpace}>
          Remove Extra Space
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={ReplaceText}>
          ReplaceAllText
        </button>
        <input
          className="mx-1"
          type="text"
          value={ftext}
          onChange={handleclick1}
          size="10"
        />
        <input
          className="mx-1"
          type="text"
          value={rtext}
          onChange={handleclick2}
          size="10"
        />
      </div>
      <div className="container my-4" style={{
              color:(props.mode === "light")? "#2e427bba" : "white",
            }}>
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} time take to read</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
