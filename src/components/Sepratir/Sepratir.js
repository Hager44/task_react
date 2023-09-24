import React from "react";
import './Sepratir.css';

import line from "../New_folder/Line-1.png";
function Sepratir(){
return(
    <section className="sepratir" style={{overFlow:'hidden'}}>
    <div className="container-fluid">
      <div className="row background-cont">
        <div className="col-12 mt-5 background-sepratir">
          <div className="d-flex justify-content-center align-items-center mt-5 position-relative " style={{height:'70%'}}>
            <div className=" mb-4 position-absolute sepratir-text" style={{zIndex:1,letterSpacing:'5px',height:'100px',fontFamily:'Volkhov,serif',fontWeight:700,fontSize:'50px',lineHeight:'64.5px',color:'#FFFFFF',left:'10%'}}>
              Let’s Make Your<br className="lg-only"/>Next Holiday Amazing
            </div>
            <img src={line} alt="line" className="position-absolute mt-5 ps-5 sepratir-line" style={{zIndex:1,marginLeft:'-13%',top:'60%'}}/>
          </div>
        </div>
      </div>
     </div>
   </section>

);


};
export default Sepratir;