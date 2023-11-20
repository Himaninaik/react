import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../css/Contact.css";

function Contact(){
    

    const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_ibfi8ux', 'template_3irj8uh', form.current, '4P98HAmJE0lD7YAKA')
            .then((result) => {
                console.log(result.text);
                alert("sent email succesfully");
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                
                
           
            });
        };
        
    return(
        <>
        <br/><br/>
        <h1><u>contact me</u></h1>
        <br/>
        <div className="form">
        <form ref={form} onSubmit={sendEmail}>

            <table align="center">
            <tr>
                <td><input type="text" name="user-name" placeholder="Enter your Name" required/></td>
                </tr>
                <br></br>
                <tr>
                <td><input type="text" name="email"placeholder="Enter your email" required/></td>
                </tr>
                <br></br>
                <tr> 
                <td><textarea  row="5" cols="25" name="message" placeholder="Enter your message" required/></td>
                </tr>
                <br></br>
                <div className="but">
                <tr>
                    <button>Send Message</button>
                </tr>
               
                </div>
                </table>

       </form>
</div>
        </>
    );
}
        
export default Contact;