import React from "react";
import './Searchtool.css';


function Searchtool(){
    
    const inputStyle = {
        width: '110px',
        backgroundColor: 'transparent',
        outline: 'none',
        borderRight: '2px solid #f3f3f378',
        borderTop: 'none',
        borderLeft: 'none',
        borderBottom: 'none',
        boxShadow: 'none',
        color: 'white',
        borderRadius: '0%',
      };
    
      const btn1Style = {
        borderRadius: '0%',
        borderRight: '2px solid #f3f3f378',
        borderTop: 'none',
        borderLeft: 'none',
        borderBottom: 'none',
      };
return(
<section className="search-tool"> 
      <div className="input-group input-group-sm" >
       <div className="container g-0 mt-3">
        <div className="row">
         <div className="col-6 d-flex justify-content-center input-container py-4 searching-tool">
          
          <input type="text" className="form-control custom-input" placeholder="Where to?" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" style={inputStyle}/>
          <button className="btn text-white dropdown-toggle btn1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={btn1Style}>Travel Type</button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Adventure</a></li>
          <li><a className="dropdown-item" href="#">Tourism</a></li>
          <li><a className="dropdown-item" href="#">Leisure</a></li>
        </ul>
        <button className="btn  text-white dropdown-toggle btn1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={btn1Style}>Duration</button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">week</a></li>
          <li><a className="dropdown-item" href="#">month</a></li>
          <li><a className="dropdown-item" href="#">year</a></li>
        </ul>
        <button className="btn  text-white btn1" type="button" style={{ backgroundColor: '#DF6951', height: '40px!important', margin: 'auto' }}>Submit</button>
         </div>
        </div>
       </div>


      </div>

      
    </section>
);

}
export default Searchtool;