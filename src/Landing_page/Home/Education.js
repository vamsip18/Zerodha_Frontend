import React from 'react';

function Education() {
    return ( 
        <div className='container m-5 text-muted'>
            <div className='row'>
                <div className='col-6'>
                    <img src='./images/education.svg' alt='education'></img>
                </div>
                <div className='col-6 mt-10'>
                    <div className='row m-5'>
                        <h1>Free and open market education</h1>
                        <p className='mb-3 text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href="" style={{textDecoration:"none"}}>Varsity  <i class="fa-solid fa-arrow-right"></i></a>
                        <p className='mt-3 text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href="" style={{textDecoration:"none"}}>TradingQ&A  <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Education;