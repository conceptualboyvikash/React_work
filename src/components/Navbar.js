import React from 'react'
import PropTypes from 'prop-types'
import { Link }  from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/React_work">{props.title}</Link>
      <Link className="navbar-brand" to="/React_work">Home</Link>
      <Link className="navbar-brand" to="/React_work/Accord">About</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
      
         
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
       
         
             <button type="button" style={{backgroundColor:"#0dbefd7a"}} onClick={()=>props.colorset("#0dbefd7a")} className="mx-1 btn ">Dark.M1</button>
            <button type="button" style={{backgroundColor:"#6c757d"}} onClick={()=>props.colorset("#6c757d")} className="mx-1 btn ">Dark.M2</button>
            <button type="button" style={{backgroundColor:"#1aac6857"}}onClick={()=>props.colorset("#1aac6857")} className="mx-1 btn ">Dark.M3</button>
            <button type="button" style={{backgroundColor:"#dc35455e"}}onClick={()=>props.colorset("#dc35455e")} className="mx-1 btn ">Dark.M4</button>
            
           
           
          <div className="form-check form-switch container"  style={{paddingTop:'10px'}}>
            <input className="form-check-input"   type="checkbox" role="switch" id="flexSwitchCheckChecked"  onClick={props.toggleMode}/>
            
            <label className={`form-check-label text-${props.mode==='light'?'dark':'light'} `}htmlFor="flexSwitchCheckChecked" >Enable {props.mode==='light'?'dark':'light'} Mode</label>
          </div>
          {/* <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        

      </div>
    </div>
     
  </nav>
  )
}
Navbar.propTypes={title:PropTypes.string.isRequired,
about:PropTypes.string.isRequired}

Navbar.defaultProps={
  title:"vikash",
  about:"my numer 8877"
}