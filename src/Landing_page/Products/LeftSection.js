import React from 'react';

function LeftSection({imgUrl,title,description,try_demo,learn_more,play_store,app_badge,arrow1,arrow2}) {
    return ( 
        <div className='container'>
            <div className='row mt-5 mb-5 '>
                <div className='col-8 text-center'>
                    <img src={imgUrl} alt='img'></img>
                </div>
                <div className='col-4 m-auto text-muted'>
                    <h1 className='mb-3'>{title}</h1>
                    <p className='mb-3'>{description}</p>
                    <div className='row mb-4'>
                        <div className='col-6 '>
                            <a href='' style={{textDecoration:"none"}}>{try_demo}<i class={arrow1}></i></a>
                        </div>
                        <div className='col-6 '>
                            <a href='' style={{textDecoration:"none"}}>{learn_more}<i class={arrow2}></i></a>
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-6 '>
                            <img src={play_store} alt='img'></img>
                        </div>
                        <div className='col-6 '>
                            <img src={app_badge} alt='img'></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default LeftSection;