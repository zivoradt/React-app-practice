import React, {useEffect} from 'react';


function About()
{
    useEffect(()=>{
        document.title = "About Us";
    });
    return(
        <div className='container'>
            <h1 className='mb-5'>About Us</h1>
            <hr/>
            <p>Gere is detail about us</p>
        </div>
    )
}

export default About;