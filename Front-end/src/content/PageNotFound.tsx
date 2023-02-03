import React, {useEffect} from 'react';


function pageNotFound()
{
    useEffect(()=>{
        document.title = "Error: 404 - Page not found";
    });
    return(
        <div className='container'>
            <h1 className='mb-5'>Error: 404 - Page not found</h1>
            
        </div>
    )
}

export default pageNotFound;