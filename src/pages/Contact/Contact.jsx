import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "../../styles/contact.css"
import image from "../../Assets/constact.png"
import toast from 'react-hot-toast'

const Contact = () => {
  const SendMessage = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    formData.append("access_key", "5cafe78e-9bc2-499f-ad8a-97367280656a");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    console.log("Request Payload:", json); // Add this line to inspect the data sent
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const data = await res.json();
      
      if (data.success) {
        console.log("Success", data);
       toast.success("Message sent successfully!");
 
      } else {
        console.error("API Error", data);
        toast.error("Message sending failed.");
      }
    } catch (error) {
      console.error("Network Error", error);
      toast.error("Network error: " + error.message);
    }
  };
  
  return <section className="contact_section" id='contact'>
    <Container>
        <Row>
           
            <h1 className='title'>Contact</h1>
        
            </Row>
            <div className="content_contact">
           <Row>
<Col md="6">
<div className="content_contact_left">
<img lazy="loading" src={image} alt="" />

              </div>
</Col>

          <Col md="6">
          
          <div className="form">
                <form onSubmit={SendMessage}>
                  <h2 className='mx-5 mt-5 form-title' >Connect With Your <br /> future Team Today!</h2>
                  <div className="input_box">
                    <p>Your Name</p>
                    <input type="text" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="input_data">
                    <div className="input_box">
                      <p>Phone Number</p>
                      <input type="text" name="phone" placeholder="Phone Number" required  />
                    </div>
                    <div className="input_box">
                      <p>Email</p>
                      <input type="email"name="email" placeholder="Email" required />
                    </div>
                  </div>
                  <div className="input_box">
                    <p>Project Detail</p>
                    <textarea  id="" name="message">

                    </textarea>
                  </div>
                  <button type="submit" className='btn_form'>
                  Contact US <i class="ri-arrow-right-line"></i>
                  </button>
 
                </form>
              </div>
          </Col>
           </Row>
             
            </div>
    </Container>
  </section>
}

export default Contact