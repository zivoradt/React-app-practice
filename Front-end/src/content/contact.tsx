import React, {useEffect} from 'react';
import Link from 'react-router-dom';


function Contact()
{
    useEffect(()=>{
        document.title = "Contact";
    });
    return(
        <div className='container'>
            <h1>Contact Us</h1>
        <div className="row justify-content-lg-center g-3">
          {/*<div id="messageArea"></div>*/}
          <form className="col-lg-6 col-md-10 col-sm-10">

            <div className="input-group mb-3">
              <span className="input-group-text">Full Name </span>
              <input id="fullName" type="text" className="form-control" aria-label="Full Name" aria-describedby="Full Name Input"
              name="fullName" required/>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" >Contact Number</span>
              <input id="contactNumber" type="tel" className="form-control" aria-label="Contact Number" aria-describedby="Contact Number Input"
              name="contactNumber" required/>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
              <input id="emailAddress" type="email" className="form-control" aria-label="Email Address" aria-describedby="Email Address Input"
              name="emailAddress" required/>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Your Message</span>
              <textarea id="message" className="form-control" aria-label="With textarea" required></textarea>
            </div>
  
            <div className="form-check mb-3">
              <input id="subscribeCheckbox" className="form-check-input" type="checkbox" name="subscribeCheckbox"/>
              <label className="form-check-label"> Subscribe to our Contact List</label>
            </div>

            <div className="text-end mt-2">
              <button id="sendButton" type="button" className="btn btn-primary"><i className="fas fa-envelope fa-lg"></i> Send</button>
              <button id="cancelButton" type="reset" className="btn btn-warning"><i className="fas fa-undo fa-lg"></i> Cancel</button>
            </div>
          </form>

    
        </div>
        </div>
    )
}

export default Contact;