import React from "react";
import './Products.css';

import vector1 from "../New_folder/Vector.png";
import vector2 from "../New_folder/Vector (1).png";
import star from "../New_folder/bi_star-fill.png";
import location from "../New_folder/ep_location.png";
function Products(props){
return(

<section class="trips">
  <div class="d-flex justify-content-center mt-3" style={{fontFamily:'Poppins, sans-serif', fontWeight: 700,fontSize: '18px',color: '#DF6951',lineHeight: '27px'}}>
    TRENDY
  </div>
  <div class="d-flex justify-content-center trending-tour" style={{fontFamily:'Volkhov, sans-serif', fontWeight: 700,fontSize: '50px',color: '#181E4B'}}>
    Our Trending Tour
  </div>
  <div class="d-flex justify-content-center trending-tour" style={{fontFamily:'Volkhov, sans-serif', fontWeight: 700,fontSize: '50px',color: '#181E4B'}}>
    Packages
  </div>

  <div class="container-lg ">
    <div class="row my-5  align-items-center justify-content-center">
      <div class="col-lg-4 trips-countries">
        <div style={{position: 'relative'}}>
        {props.products[0].countryFlag}
        </div>
          <div class="card-body text-start mt-4 position-relative">
          {props.products[0].countrySymbol} 
            <img src={vector1} alt=""/>
            <h6 class="display-6 d-inline ms-1" style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[0].days} days</h6>
            <img src={vector2} alt="" class="ms-4"/>
            <h6 class="display-6 d-inline ms-1" style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[0].people} People going</h6>
            <div class="d-flex justify-content-between align-items-center ">
            <a href="https://en.wikipedia.org/wiki/Bern" class="card-title country" style={{color:'#2F2F2F',fontFamily:'Poppins, sans-serif', fontWeight:700,fontSize:'29px',textDecoration: 'none'}}>{props.products[0].city}</a>
            <div class="d-inline ">
              <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            </div>
            </div>
            
            <img src={location} alt=""/>
            <h6 class="display-6 d-inline " style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[0].country}</h6>
            <br/>
            <p class="display-5 fw-bold d-inline me-3 ms-2 " style={{color: '#DF6951',fontFamily:'Poppins, sans-serif', fontWeight: 500,fontSize: '29px'}}>{props.products[0].priceBefore}$</p>
            <p class="display-5 fw-bold d-inline" style={{textDecoration: 'line-through', color:'#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 500,fontSize: '22px'}}>{props.products[0].priceAfter}</p>
            <p class="card-text ms-2 mt-2 d-none d-lg-block" style={{fontFamily:'Poppins, sans-serif', fontWeight:400,fontSize:'12px',color: 'black',letterSpacing:'2px'}}>{props.products[0].text}</p>
            <a href="#" class="btn btn-lg mt-1" style={{backgroundColor: '#DF6951',color: 'white'}}>
              Explore Now
            </a>
          </div>
      </div>

      <div class="col-lg-4 trips-countries">
        <div style={{position: 'relative'}}>
          {props.products[1].countryFlag}  
        </div>
          <div class="card-body text-start mt-4 position-relative">
            {props.products[1].countrySymbol}
            <img src={vector1} alt=""/>
            <h6 class="display-6 d-inline ms-1" style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[1].days} days</h6>
            <img src={vector2} alt="" class="ms-4"/>
            <h6 class="display-6 d-inline ms-1" style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[1].people} People going</h6>
            <div class="d-flex justify-content-between align-items-center">
            <a href="https://en.wikipedia.org/wiki/Bern" class="card-title  countries" style={{color:'#2F2F2F',fontFamily:'Poppins, sans-serif', fontWeight:700,fontSize:'29px',textDecoration: 'none'}}>{props.products[1].city}</a>
            <div class="d-inline ">
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
          </div>  
          </div>
            <img src={location} alt=""/>
            <h6 class="display-6 d-inline " style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[1].country}</h6>
            <br/>
            <p class="display-5 fw-bold d-inline me-3 ms-2 " style={{color: '#DF6951',fontFamily:'Poppins, sans-serif', fontWeight: 500,fontSize: '29px'}}>{props.products[1].priceAfter}$</p>
            <p class="display-5 fw-bold d-inline" style={{textDecoration: 'line-through', color:'#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 500,fontSize: '22px'}}>{props.products[1].priceBefore}$</p>
            <p class="card-text ms-2 mt-2 d-none d-lg-block" style={{fontFamily:'Poppins, sans-serif', fontWeight:400,fontSize:'12px',color: 'black',letterSpacing:'2px'}}>{props.products[1].text}</p>
            <a href="#" class="btn btn-lg mt-1" style={{backgroundColor: '#DF6951',color: 'white'}}>
              Explore Now
            </a>
          </div>
      </div>

      <div class="col-lg-4 trips-countries">
        <div style={{position: 'relative'}}>
          {props.products[2].countryFlag} 
          
        </div>
          <div class="card-body text-start mt-4 position-relative">
            {props.products[2].countrySymbol}
            <img src={vector1} alt=""/>
            <h6 class="display-6 d-inline ms-1" style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[2].days} days</h6>
            <img src={vector2} alt="" class="ms-4"/>
            <h6 class="display-6 d-inline ms-1" style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[2].people} People going</h6>
            <div class="d-flex justify-content-between align-items-center">
            <a href="https://en.wikipedia.org/wiki/Bern" class="card-title  countries" style={{color:'#2F2F2F',fontFamily:'Poppins, sans-serif', fontWeight:700,fontSize:'29px',textDecoration: 'none'}}>{props.products[2].city}</a>
            <div class="d-inline ">
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
          </div>  
          </div>
            
            <img src={location} alt=""/>
            <h6 class="display-6 d-inline " style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[2].country}</h6>
            <br/>
            <p class="display-5 fw-bold d-inline me-3 ms-2 " style={{color: '#DF6951',fontFamily:'Poppins, sans-serif', fontWeight: 500,fontSize: '29px'}}>{props.products[2].priceAfter}$</p>
            <p class="display-5 fw-bold d-inline" style={{textDecoration: 'line-through', color:'#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 500,fontSize: '22px'}}>{props.products[2].priceBefore}$</p>
            <p class="card-text ms-2 mt-2 d-none d-lg-block" style={{fontFamily:'Poppins, sans-serif', fontWeight:400,fontSize:'12px',color: 'black',letterSpacing:'2px'}}>{props.products[2].text}</p>
            <a href="#" class="btn btn-lg mt-1" style={{backgroundColor: '#DF6951',color: 'white'}}>
              Explore Now
            </a>
          </div>
      </div>







  </div>
  <div class="row my-5  align-items-center justify-content-center">
    <div class="col-lg-4 trips-countries">
      <div style={{position: 'relative'}}>
        {props.products[3].countryFlag}
        
      </div>
        <div class="card-body text-start mt-4 position-relative">
        {props.products[3].countrySymbol}
          <img src={vector1} alt=""/>
          <h6 class="display-6 d-inline ms-1" style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[3].days} days</h6>
          <img src={vector2} alt="" class="ms-4"/>
          <h6 class="display-6 d-inline ms-1" style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[3].people} People going</h6>
         
          <div class="d-flex justify-content-between align-items-center">
            <a href="https://en.wikipedia.org/wiki/Bern" class="card-title  countries" style={{color:'#2F2F2F',fontFamily:'Poppins, sans-serif', fontWeight:700,fontSize:'29px',textDecoration: 'none'}}>{props.products[3].city}</a>
            <div class="d-inline ">
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
          </div>  
          </div>
            
          <img src={location} alt=""/>
          <h6 class="display-6 d-inline " style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[3].country}</h6>
          <br/>
          <p class="display-5 fw-bold d-inline me-3 ms-2 " style={{color: '#DF6951',fontFamily:'Poppins, sans-serif', fontWeight: 500,fontSize: '29px'}}>{props.products[3].priceAfter}$</p>
          <p class="display-5 fw-bold d-inline" style={{textDecoration: 'line-through', color:'#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 500,fontSize: '22px'}}>{props.products[3].priceBefore}$</p>
          <p class="card-text ms-2 mt-2 d-none d-lg-block" style={{fontFamily:'Poppins, sans-serif', fontWeight:400,fontSize:'12px',color: 'black',letterSpacing:'2px'}}>{props.products[3].text}</p>
          <a href="#" class="btn btn-lg mt-1" style={{backgroundColor: '#DF6951',color: 'white'}}>
            Explore Now
          </a>
        </div>
    </div>

    <div class="col-lg-4 trips-countries">
      <div style={{position: 'relative'}}>
        {props.products[4].countryFlag}
        
      </div>
        <div class="card-body text-start mt-4 position-relative">
        {props.products[4].countrySymbol}
          <img src={vector1} alt=""/>
          <h6 class="display-6 d-inline ms-1" style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[4].days} days</h6>
          <img src={vector2} alt="" class="ms-4"/>
          <h6 class="display-6 d-inline ms-1" style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[4].people} People going</h6>
         
          <div class="d-flex justify-content-between align-items-center">
            <a href="https://en.wikipedia.org/wiki/Bern" class="card-title  countries" style={{color:'#2F2F2F',fontFamily:'Poppins, sans-serif', fontWeight:700,fontSize:'29px',textDecoration:'none'}}>{props.products[4].city}</a>
            <div class="d-inline ">
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
          </div>  
          </div>
            
          <img src={location} alt=""/>
          <h6 class="display-6 d-inline " style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[4].country}</h6>
          <br/>
          <p class="display-5 fw-bold d-inline me-3 ms-2 " style={{color: '#DF6951',fontFamily:'Poppins, sans-serif', fontWeight: 500,fontSize: '29px'}}>{props.products[4].priceAfter}$</p>
          <p class="display-5 fw-bold d-inline" style={{textDecoration: 'line-through', color:'#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 500,fontSize: '22px'}}>{props.products[4].priceBefore}$</p>
          <p class="card-text ms-2 mt-2 d-none d-lg-block" style={{fontFamily:'Poppins, sans-serif', fontWeight:400,fontSize:'12px',color: 'black',letterSpacing:'2px'}}>{props.products[4].text}</p>
          <a href="#" class="btn btn-lg mt-1" style={{backgroundColor: '#DF6951',color: 'white'}}>
            Explore Now
          </a>
        </div>
    </div>

    <div class="col-lg-4 trips-countries">
      <div style={{position: 'relative'}}>
        {props.products[5].countryFlag}
        
      </div>
        <div class="card-body text-start mt-4 position-relative">
          {props.products[5].countrySymbol}
          <img src={vector1} alt=""/>
          <h6 class="display-6 d-inline ms-1" style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[5].days} days</h6>
          <img src={vector2} alt="" class="ms-4"/>
          <h6 class="display-6 d-inline ms-1" style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[5].people} People going</h6>
         
          <div class="d-flex justify-content-between align-items-center">
            <a href="https://en.wikipedia.org/wiki/Bern" class="card-title  countries" style={{color:'#2F2F2F',fontFamily:'Poppins, sans-serif', fontWeight:700,fontSize:'29px', textDecoration: 'none'}}>{props.products[5].city}</a>
            <div class="d-inline ">
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            </div>
          </div>
            
          <img src={location} alt=""/>
          <h6 class="display-6 d-inline " style={{color: '#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 400,fontSize: '16px'}}>{props.products[5].country}</h6>
          <br/>
          <p class="display-5 fw-bold d-inline me-3 ms-2 " style={{color: '#DF6951',fontFamily:'Poppins, sans-serif', fontWeight: 500,fontSize: '29px'}}>{props.products[5].priceAfter}$</p>
          <p class="display-5 fw-bold d-inline" style={{textDecoration: 'line-through', color:'#7D7D7D',fontFamily:'Poppins, sans-serif', fontWeight: 500,fontSize: '22px'}}>{props.products[5].priceBefore}$</p>
          <p class="card-text ms-2 mt-2 d-none d-lg-block" style={{fontFamily:'Poppins, sans-serif', fontWeight:400,fontSize:'12px',color: 'black',letterSpacing:'2px'}}>{props.products[5].text}</p>
          <a href="#" class="btn btn-lg mt-1" style={{backgroundColor: '#DF6951',color: 'white'}}>
            Explore Now
          </a>
        </div>
    </div>


  </div>


  </div>


</section>



);

};
export default Products;
