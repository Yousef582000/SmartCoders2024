import React from 'react'
import "../../styles/team.css"
import { Col, Container, Row } from 'reactstrap'
import TeamCard from '../../Components/teamCard/TeamCard'
import imag1 from "../../Assets/imag1.jpg"
import imag2 from "../../Assets/imag2.jpg"
import imag3 from "../../Assets/imag3.jpg"


const OurTeam = () => {
  return <section className='team-section' id='OurTeam'>
    <Container>
    <Row>
    <h1 className='title'>our Team</h1>
    </Row>

    <Row className='mb-5'>
    <Col lg="6">
    <TeamCard img={imag1} title="Front End Developer" name="Yousef Eid" />
    </Col>
    <Col lg="6">
    <TeamCard img={imag2}title="UI/Ux Designer" name="Yassmin Hazem" />
    </Col>
    </Row>

    <Row>
        <Col lg="6">
        <TeamCard img={imag3} title="Back End Developer" name="Mohamed Atya" />
        </Col>
    </Row>
    </Container>


  </section>
}

export default OurTeam