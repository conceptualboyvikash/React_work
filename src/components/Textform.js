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
    const [text, setText]=useState('Intial text');
    // text="conceput_clear" //wrong way 
    // setText("coneptu_clar") //correct way
  return (
    <div>
       
        <div className="mb-3">
        <h1>Enter you Text Below </h1>
        <textarea className="form-control"  value={text} onChange={handleclick} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}
