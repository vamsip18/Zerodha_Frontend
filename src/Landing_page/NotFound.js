import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container'>
            <div className='row text-center'>
                <h1 className='mb-3'>404 Page Not Found</h1>
                <p className='mb-3'>Something went wrong</p>
                <Link to='/' style={{textDecoration:"none"}}>Go to Home</Link>
            </div>
        </div>
     );
}

export default NotFound;