import React, {useState} from 'react'


export default function Textform(props) {
    const handleclick=(event)=>{
        // console.log("onclick on");
        setText(event.target.value);
        
    }
    const handleUpClick=(event)=>{
        const newtext=text.toUpperCase();
        setText(newtext);
      
    }
    const handleDownClick=(event)=>{
        const newtext=text.toLowerCase();
        setText(newtext);
      
    }
    const [text, setText]=useState('');
    // text="conceput_clear" //wrong way 
    // setText("coneptu_clar") //correct way
  return (
    <>
    <div>
        <div className="mb-3">
        <h1>Enter you Text Below </h1>
        <textarea className="form-control"  value={text} onChange={handleclick} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-4">
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length}</p>
      <p>{0.008*text.split(" ").length} time take to read</p>
      <h2>preview</h2>
      <p>{text}</p>
      
      </div>

    </>
  )
}
