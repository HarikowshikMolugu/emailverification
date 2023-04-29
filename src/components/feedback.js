import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./feedback.css"


export const Feedback = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6jeeouk', 'template_63m0jfd', form.current, 'yHprSMhETa1i2Cte4')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return(
        <div>
            <div id='feedback-head'>
                <p>Email verification</p>
            </div>
           <div id="feedback-form">
                <form action="" autocomplete="on" ref={form} onSubmit={sendEmail}>
                    <fieldset id="fs3">
                        <legend><p id="legend3"><b >Fill the form:</b></p></legend>
            
                       <input type="text"  id="fe-name" name="fename" placeholder="Name*" required></input><br></br>
                       <input type="email"  id="fe-email" name="feemail" placeholder="Email Address*" required></input><br></br>
                       <input type="tel"  id="fe-ph" name="feph" placeholder="Contact Telephone*" required></input><br></br>
                       <input type="text"  id="fe-country" name="fecountry" placeholder="Country*" required></input><br></br>
                       <input type="text"  id="fe-city" name="fecity" placeholder="City*" required></input><br></br>
                       <input type="text"  id="fe-company" name="fecompany" placeholder="Company*" required></input><br></br>
                       <input type="text"  id="fe-website" name="fewebsite" placeholder="Website*" required></input><br></br>
                       <input type="textarea" id="fe-msg" name="femsg" placeholder="Detailed Requirement*" required></input><br></br>
                       <input type="submit"  id="fe-button" ></input>
                    </fieldset>
                </form>      
            </div> 
        </div>
             

           
                 
            
        
        
    )
    }
export default Feedback;