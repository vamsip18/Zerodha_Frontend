import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row text-center text-muted'>
                <h1 className='mb-3'>The Zerodha Universe</h1>
                <p className='mb-3'>We have a wide range of products for you to choose from.</p>
            </div>
            <div className='row m-auto text-muted mt-5'>
                <div className='col m-auto text-center mb-5'>
                    <img className='mb-3' src="./images/zerodhaFundhouse.png" style={{width:"200px"}} alt='img'></img>
                    <p style={{margin:"auto"}}>Asset management</p>
                </div>
                <div className='col m-auto text-muted text-center mb-5'>
                    <img className='mb-3' src="./images/sensibullLogo.svg" style={{width:"200px"}} alt='img'></img>
                    <p style={{margin:"auto"}}>Options trading platform</p>
                </div>
                <div className='col m-auto text-muted text-center mb-5'>
                    <img className='mb-3' src="./images/streakLogo.png" style={{width:"200px"}} alt='img'></img>
                    <p style={{margin:"auto"}}>Algo & strategy platform</p>
                </div>
            </div>
            <div className='row m-auto'>
                <div className='col m-auto text-muted text-center mb-5'>
                    <img className='mb-3' src="./images/dittoLogo.png" style={{width:"200px"}} alt='img'></img>
                    <p style={{margin:"auto"}}>Insurance</p>
                </div>
                <div className='col m-auto text-muted text-center mb-5'>
                    <img className='mb-3' src="./images/goldenpiLogo.png" style={{width:"200px",marginBottom:"5"}} alt='img'></img>
                    <p style={{margin:"auto"}}>Bonds trading platform</p>
                </div>
                <div className='col m-auto text-muted text-center mb-5'>
                    <img className='mb-3' src="./images/smallcaseLogo.png" style={{width:"200px"}} alt='img'></img>
                    <p style={{margin:"auto"}}>Thematic investment platform</p>
                </div>
            </div>
            <div className='row text-center m-5'>
                <div className='col m-auto mb-5'>
                    <button className='btn btn-primary' style={{width:"20%"}}>Sign up for free</button>
                </div>
            </div>
        </div>
     );
}

export default Universe;