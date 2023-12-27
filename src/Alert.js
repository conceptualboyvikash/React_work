import React from "react";

export default function Alert(props) {
  const captalise=(word)=>
  {
      const text=word.toLowerCase();
      return text.charAt(0).toUpperCase()+text.slice(1);
  }
  return ( 
    <div style={{height:'50px'}}>
   { props.alert && <div className={`alert alert-${props.alert.txt} alert-dismissible fade show`} role="alert">
    <strong>{captalise(props.alert.txt)}</strong> :{props.alert.msg}
  </div>}
  </div>
  );
}
