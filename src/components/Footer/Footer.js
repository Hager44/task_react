import React from "react";
import './Footer.css';

import backgroundImg from '../New_folder/Footerimg.png';
import arrow from "../New_folder/Arrow 05 (2).png";
import linkdin from "../New_folder/052-linkedin.png";
import messenger from "../New_folder/Vector (3).png";
import twitter from "../New_folder/Vector (4).png";
import infinity from "../New_folder/Vector (5).png";
import rectangle97 from '../New_folder/Rectangle97.png'
function Footer(){
return(
    <section class="footer" style={{backgroundImage:`url(${backgroundImg})`, backgroundRepeat:'no-repeat',backgroundPosition:'right', backgroundSize:'contain',overflow:'hidden'}}>
  <div class="container mt-5">
    <div class="d-none d-lg-flex justify-content-around">
      <div class="travel">
        <p class="position-relative" style={{color:'#181E4B',fontFamily:'Volkhov, sans-serif', fontWeight:700,fontSize:'32px'}}>Travel</p>
        <img src={arrow} alt="arrow" class="position-absolute ms-4 travel-arrow" style={{marginTop:'-3%'}}/>
        <p style={{color: '#757095',fontFamily: 'Manrope, sans-serif',fontWeight:500,fontSize:'16px'}} class="mt-4">Travel helps companies manage<br/> payments easily.</p>
        <div class="mt-3">
          <a href="#" class="me-2"><img src={linkdin} alt="linkedin"/></a>
          <a href="#" class="me-2"><img src={messenger} alt="messenger"/></a>
          <a href="#" class="me-2"><img src={twitter} alt="twitter"/></a>
          <a href="#" class="me-2"><img src={infinity} alt="infinity"/></a>
        </div>
      </div>

    
      <div class="manrope">
        <p style={{fontFamily: 'Manrope, sans-serif',fontWeight:500,fontSize: '21px',color: '#181433'}} class="fw-bold mt-3">Company</p>
        <a href="#" style={{fontFamily: 'Manrope, sans-serif',fontWeight:500,fontSize:'16px',color: '#181433', textDecoration:'none'}} class="d-block mb-2">About Us</a>
        <a href="#" style={{fontFamily: 'Manrope, sans-serif',fontWeight:500,fontSize: '16px',color: '#181433', textDecoration: 'none'}} class="d-block mb-2">Careers</a>
        <a href="#" style={{fontFamily: 'Manrope, sans-serif',fontWeight:500,fontSize: '16px',color: '#181433', textDecoration: 'none'}} class="d-block mb-2">Blog</a>
        <a href="#" style={{fontFamily: 'Manrope, sans-serif',fontWeight:500,fontSize: '16px',color: '#181433',textDecoration: 'none'}} class="d-block mb-2">Pricing</a>
      </div>

      
      <div class="destinations">
        <p style={{fontFamily: 'Manrope, sans-serif',fontWeight:500,fontSize: '21px',color: '#181433'}} class="fw-bold mt-3">Destinations</p>
        <a href="#" style={{fontFamily: 'Manrope, sans-serif',fontWeight:500,fontSize: '16px',color: '#181433', textDecoration:'none'}} class="d-block mb-1">Maldives</a>
        <a href="#" style={{fontFamily: 'Manrope, sans-serif',fontWeight:500,fontSize: '16px',color: '#181433', textDecoration: 'none'}} class="d-block mb-1">Los Angeles</a>
        <a href="#" style={{fontFamily: 'Manrope, sans-serif',fontWeight:500,fontSize: '16px',color: '#181433', textDecoration: 'none'}} class="d-block mb-1">Las Vegas</a>
        <a href="#" style={{fontFamily: 'Manrope, sans-serif',fontWeight:500,fontSize: '16px',color: '#181433',textDecoration: 'none'}} class="d-block mb-1">Toronto</a>
      </div>

     
      <div class="third">
        <p style={{fontFamily: 'Manrope, sans-serif',fontWeight:500,fontSize: '21px',color: '#181433'}} class="fw-bold mt-3">Join Our Newsletter</p>
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Your email address" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{color:'#757095',fontFamily: 'Manrope, sans-serif',fontWeight:500,fontSize:'16px',backgroundColor:'#EEEEFF',borderRadius:'0px',boxShadow:'#EEEEFF'}}/>
          <button type="button" class="btn input-group-text" style={{backgroundColor: '#DF6951',color:'#ffffff',borderRadius:'5px', fontFamily: 'Manrope, sans-serif',fontWeight:500,fontSize:'16px'}}>Subscribe</button>
        </div>
        <p style={{color: '#757095',fontFamily: 'Manrope, sans-serif',fontWeight:500,fontSize:'16px'}}>*Will send you weekly updates for your better tour packages.</p>
      </div>
    </div>

    <div class="d-lg-none text-center mt-5">
      <div class="travel mx-auto">
        <p style={{color: '#181E4B', fontFamily: 'Volkhov, sans-serif', fontWeight: 700}}>Travel</p>
        <img src={arrow} alt="arrow" class="ms-4 travel-arrow" style={{marginTop: '-3%'}}/>
        <p style={{color: '#757095', fontFamily: 'Manrope, sans-serif', fontWeight: 500,  marginTop:'1rem'}}>Travel helps companies manage payments easily.</p>
        <div class="mt-3">
          <a href="#" class="me-2"><img src={linkdin} alt="linkedin"/></a>
          <a href="#" class="me-2"><img src={messenger} alt="messenger"/></a>
          <a href="#" class="me-2"><img src={twitter} alt="twitter"/></a>
          <a href="#" class="me-2"><img src={infinity} alt="infinity"/></a>
        </div>
      </div>
      <div class="destinations mx-auto mt-5">
        <p style={{color: '#181433', fontFamily: 'Manrope, sans-serif', fontWeight: 500}} class="fw-bold">Destinations</p>
        <a href="#" style={{color: '#181433', fontFamily: 'Manrope, sans-serif', fontWeight: 500,  textDecoration: 'none', display: 'block', marginBottom: '1rem'}}>Maldives</a>
        <a href="#" style={{color: '#181433', fontFamily: 'Manrope, sans-serif', fontWeight: 500,  textDecoration: 'none', display: 'block', marginBottom: '1rem'}}>Los Angeles</a>
        <a href="#" style={{color: '#181433', fontFamily: 'Manrope, sans-serif', fontWeight: 500,  textDecoration: 'none', display: 'block', marginBottom: '1rem'}}>Las Vegas</a>
        <a href="#" style={{color: '#181433', fontFamily: 'Manrope, sans-serif', fontWeight: 500,  textDecoration: 'none', display: 'block', marginBottom: '1rem'}}>Toronto</a>
      </div>
      <div class="company mx-auto mt-5">
        <p style={{color: '#181433', fontFamily: 'Manrope, sans-serif', fontWeight: 500}} class="fw-bold">Company</p>
        <a href="#" style={{color: '#181433', fontFamily: 'Manrope, sans-serif', fontWeight: 500, textDecoration: 'none', display: 'block', marginBottom: '1rem'}}>About Us</a>
        <a href="#" style={{color: '#181433', fontFamily: 'Manrope, sans-serif', fontWeight: 500, textDecoration: 'none', display: 'block', marginBottom: '1rem'}}>Careers</a>
        <a href="#" style={{color: '#181433', fontFamily: 'Manrope, sans-serif', fontWeight: 500, textDecoration: 'none', display: 'block', marginBottom: '1rem'}}>Blog</a>
        <a href="#" style={{color: '#181433', fontFamily: 'Manrope, sans-serif', fontWeight: 500, textDecoration: 'none', display: 'block', marginBottom: '1rem'}}>Pricing</a>
      </div>
      <div class="join-newsletter mx-auto mt-5">
        <p style={{color: '#181433', fontFamily: 'Manrope, sans-serif', fontWeight: 500}} class="fw-bold">Join Our Newsletter</p>
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Your email address" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{color: '#757095', fontFamily: 'Manrope, sans-serif', fontWeight: 500, backgroundColor: '#EEEEFF', borderRadius:'0px', boxDShadow:'#EEEEFF'}}/>
          <button type="button" class="btn input-group-text" style={{backgroundColor: '#DF6951', color: '#ffffff', borderRadius:'5px', fontFamily: 'Manrope, sans-serif', fontWeight: 500}}>Subscribe</button>
        </div>
        <p style={{color: '#757095', fontFamily: 'Manrope, sans-serif', fontWeight: 500}}>*Will send you weekly updates for your better tour packages.</p>
      </div>
    </div>
  </div>
  <img src={rectangle97} alt="line-hr" style={{marginTop: '2rem'}} class="d-lg-block"/>
  <p class="" style={{color: '#181433', fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: '16px', textAlign: 'center'}} >Copyright @ Xpro 2022. All Rights Reserved.</p>
</section>
);
};
export default Footer;