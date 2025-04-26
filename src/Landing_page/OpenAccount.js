import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <div className='container p-5 text-muted'>
            <div className='row text-center'>
                <h1 className='mb-3'>Open a Zerodha account</h1>
                <p className='mb-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to="/signup" className='btn btn-primary mt-3' style={{width:"15%",margin:"auto"}}>Sign up for free</Link>
            </div>
        </div>
     );
}

export default OpenAccount;