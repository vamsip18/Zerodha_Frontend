import React from 'react';

function RightSection({ imgUrl, title, description, learn_more }) {
    return (
        <div className='container mt-5'>
            <div className='row m-5 '>
                <div className='col text-muted m-auto' style={{width:'70%'}}>
                    <h1 className='mt-5 mb-3'>{title}</h1>
                    <p className='mb-3'>{description}</p>
                    <a href='' style={{ textDecoration: "none" }}>{learn_more}<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-8 text-center'>
                    <img src={imgUrl} alt='img'></img>
                </div>
            </div>
        </div>
    );
}

export default RightSection;