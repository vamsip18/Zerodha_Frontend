import React from 'react';

function Hero() {
    return ( 
        <div className='container-fluid mt-5 mb-5 ' id='support' style={{backgroundColor:"#387ed1"}}>
            <div className='row' style={{marginLeft:"4%"}}>
                <div className='col p-5 ml-5' id='supportHero'>
                    <h5 style={{color:"white"}}>Support Portal</h5>
                </div>
                <div className='col p-5 text-center' style={{marginLeft:"8%"}}>
                    <a href='' style={{color:"white"}}>Track tickets</a>
                </div>
            </div>
            <div className='row' style={{marginLeft:"4%"}}>
                <div className='col text-center'>
                    <h4 style={{color:"white"}}>Search for an answer or browse help topics to create a ticket</h4>
                    <input className='p-3 mt-3 ' placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' style={{width:"100%",marginLeft:"5%",borderRadius:"5px",border:"none"}}></input>
                    <div className='mt-4 space-between mb-5 mt-3' style={{display:"flex",justifyContent:"space-between",marginLeft:"5%"}}>
                        <a href='' className='pr-5 pb-3' style={{color:"white"}}>Track account opening </a>
                        <a href='' style={{color:"white"}}>Track segment activation</a>
                        <a href='' style={{color:"white"}}>Intraday margins </a><br/>
                        <a href='' style={{color:"white"}}>Kite user manual </a>
                    </div>
                </div>
                <div className='col mb-5' style={{color:"white",paddingLeft:"8%",lineHeight:"2.5"}}>
                    <h5 >Featured</h5>
                    <ol>
                        <li><a href='' className='mb-5' style={{color:"white",marginBottom:5}}>Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]</a><br/></li>
                        <li><a href='' className='my-5' style={{color:"white"}}>Surveillance measure on scrips - April 2025</a></li>
                    </ol>
                </div>
            </div>
        </div>
     );
}

export default Hero;