import React from "react";
import './Category.css';

function Category(){
    const poppins={
        fontFamily:'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: '18px'
    };
    const Volkhov={
        fontFamily: 'Volkhov,serif',
        fontWeight:700,
        fontSize: '50px'
    }

    return(
        <section class="category">
    <div class="display-6 d-flex justify-content-center mt-5 pt-5 pb-2 text-danger" style={poppins}>
      CATEGORY
    </div>
    <div class="display-4 d-flex justify-content-center mt-2 text-body" style={Volkhov}>
      We Offer Best Services
    </div>
 </section>
    );

};
export default Category;