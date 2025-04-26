import React from 'react';

function Team() {
    return ( 
        <div className='container p-4'>
            <div className='row '>
                <div className='col mb-3 text-center ' >
                    <h1 style={{color:"#4b4b4b"}}>People</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-4 text-center'>
                    <img src='/Images/nithinKamath.jpg' style={{borderRadius:"100%",width:"70%"}} alt='team'></img>
                    <p className='mt-3' style={{color:"#4b4b4b",fontSize:"20px"}}>Nithin Kamath</p>
                    <p className='mt-3' style={{color:"#4b4b4b",fontSize:"15px"}}>Founder & CEO</p>
                </div>
                <div className='col-6 p-5'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <a href='' style={{textDecoration:"none"}}>Homepage </a>/<a href='' style={{textDecoration:"none"}}> TradingQnA </a>/<a href='' style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;