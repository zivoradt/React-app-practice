import React, {useEffect} from 'react';


function Services()
{
    useEffect(()=>{
        document.title = "Services";
    });
    return(
        <div className='container'>
            <h1 className='mb-5'>Services</h1>
            <hr/>
            <p>Here is detail about us</p>
        </div>
    )
}

export default Services;