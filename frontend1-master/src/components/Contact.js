import React from "react";
import emailjs from 'emailjs-com';
import './Contact.css';
function Contact()
{
    const sendMail = () => {
        var params={
            name: document.getElementById("name").value,
            email:document.getElementById("email").value,
            message:document.getElementById("message").value,
        };
    
    const serviceID="service_r2yu5d9";
    const templateID="template_uiw6w0b";
    
    emailjs.send(serviceID,templateID,params)
      .then((res)=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("Your message sent successfully");
    
      })
      .catch((err)=>console.log(err));
    
    };
    return (
        <div>
      
    <title>Contact Us</title>
    <script type="text/javascript" src="contact2.js" >
 

    </script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
    </script>
    <script type="text/javascript">
    (function(){
      emailjs.init("gGtG4S5tizbOv6Adz")
    })();
   </script>
        <div class="content">
            <h2>Contact Us</h2>
            <h4>No. 1 TamilNadu Hollow Blocks </h4>
        </div>
        <div class="whole">
        <div class="container">
        <div class="contactInfo">
            <div class="box">
                 <div class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div> 

                    <div class="text">
                    <h3>Address</h3>
                    <p> OFFICE : Near L&T Byepass Road ,Kovai Main Road,Near Shakthi Mess,karur.<br></br><br></br>
                        PRODUCTION : No.237/1,VALLIPURAM PIRIVU, KOVAI MAIN ROAD, KARUDAYAMPALAYAM,<br></br>KARUR.</p>
                    </div>
               
            </div>
            <div class="box">
                <div class="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                    <div class="text">
                    <h3>Phone</h3>
                    <p>9790032259,9442532259</p>
                    </div>
            </div>
            <div class="box">
                <div class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
                    <div class="text">
                    <h3>Email</h3>
                    <p>tamilnaduthb@gmail.com</p>
                </div>
            </div>
        </div>
        </div>
   <div class="container ">
    <div class="row">

        <div class=" contactForm">
            
            <h2>Send Message</h2>
            <div class="form-group">
                <h5 for="name">Name</h5>
                <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter your name"
                />
            </div>
            <div class="form-group">
                <h5 for="email">Email</h5>
                <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
                />
            </div>
            <div class="form-group">
                <h5 for="message" >Message</h5>
                <textarea id="message" rows="3" class="form-control"></textarea>
            </div><div class="but">
            <button class="btn btn-primary" onClick={sendMail}>Submit</button>
        </div>
        </div>
    </div>
   </div> 
</div>
</div>

    
    );
}

export default Contact;