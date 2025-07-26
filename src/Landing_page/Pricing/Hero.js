import React from 'react';

function Hero() {
    return ( 
        <>
            <div className='container text-center'>
                <h1 className='p-3 mt-5'>Charges</h1>
                <h3 className='text-muted mb-5'>List of all charges and taxes</h3>
                <div className='row m-auto mt-5'>
                    <div className='col mt-5 m-auto text-center text-muted mb-5'>
                        <img src='./Images/pricing0.svg' style={{width:"60%"}} alt='img'></img>
                        <h2>Free equity delivery</h2>
                        <p style={{margin:"auto"}} className='mt-3'>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className='col mt-5 m-auto text-center text-muted mb-5'>
                        <img src='./Images/intradayTrades.svg' style={{width:"60%"}} alt='img'></img>
                        <h2>Intraday and F&O trades</h2>
                        <p style={{margin:"auto"}} className='mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per <br/>executed order on intraday trades across<br/> equity, currency, and commodity trades. Flat <br/>₹20 on all option trades.</p>
                    </div>
                    <div className='col mt-5 m-auto text-center text-muted mb-5'>
                        <img src='./images/pricing0.svg' style={{width:"60%"}} alt='img'></img>
                        <h2>Free direct MF</h2>
                        <p style={{margin:"auto"}} className='mt-3'>All direct mutual fund investments are <br/> absolutely free — ₹ 0 commissions & DP <br/> charges.</p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Hero;