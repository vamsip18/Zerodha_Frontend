import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5 mb-5 '>
                <div className='col-12 border-bottom' style={{color:"#4b4b4b"}}>
                    <h1 className='m-3'>Zerodha Products</h1>
                    <h4 className='mb-3'>Sleek, modern, and intuitive trading platforms</h4>
                    <p className='mb-5'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings →</a></p>
                </div>
            </div>
        </div>
     );
}

export default Hero;