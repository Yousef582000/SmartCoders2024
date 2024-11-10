
import React from 'react'
import "../../styles/services.css"
import { Col, Container, Row } from 'reactstrap'
import imag1 from "../../Assets/Group.png"
import imag2 from "../../Assets/Group (1).png"
import imag3 from "../../Assets/circum_mobile-2.png"
import Card from '../../Components/service-card/Card'
const Services = () => {
  const desc1="Creating intuitive, user-friendly, and visually appealing interfaces that enhance user experience and brand identity."
  const desc2="Building responsive, secure, and optimized websites that deliver seamless user experiences and meet business goals effectively"
  const  desc3="Creating high-quality, user-centered mobile apps with seamless functionality, tailored to meet specific business needs and enhance user engagement."
  
  return <section className='services-section' id='services'>
   <Container>
    <Row>
   c
    <div className="ship">
        
    </div>
    </Row>
    <Row>
        <Col md="6" lg={4}>
          <Card image={imag1} description= {desc1} title="Ui Design" />
        </Col>
        <Col md="6" lg={4}>
          <Card image={imag2} description={desc2}  title="Web Development" />
        </Col>
        <Col md="6" lg={4}>
          <Card image={imag3} description={desc3}  title="App Development" />
        </Col>
      </Row>
    <div className="ship2">
        
        </div>
   </Container>

  </section>
}

export default Services