import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5 text-muted'>
            <div className='row'>
                <div className='col-6'>
                    <h1>Unbeatable pricing</h1>
                    <div className='row mt-4'>
                        <div className='col-9'>
                            <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        </div>
                        <a style={{textDecoration:"none"}} href='#'>See pricing  <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col-6 p-3 border'>
                            <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p>Free account<br></br>
                            opening</p>
                        </div>
                        <div className='col-6 p-3 border'>
                            <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>Intraday and<br></br>
                            F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;