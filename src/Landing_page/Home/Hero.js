import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container mb-5 text-muted'>
            <div className='row p-5'>
                <img src='public/images/homeHero.png' alt='hero' />
            </div>
            <div className='row text-center'>
                <h1>Invest in everything</h1>
                <p className='mb-3'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to="/signup" className='btn btn-primary' style={{width:"15%", margin:"auto"}}>Signup for free</Link>
            </div>
        </div>
     );
}

export default Hero;
