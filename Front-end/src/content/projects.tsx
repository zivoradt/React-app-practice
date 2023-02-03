import React, {useEffect} from 'react';


function Projects()
{
    useEffect(()=>{
        document.title = "Projects";
    });
    return(
        <div className='container'>
            <h1 className='mb-5'>Projects Us</h1>
            <hr/>
            <p>Here is detail Projects us</p>
        </div>
    )
}

export default Projects;