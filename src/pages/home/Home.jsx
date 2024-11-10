import React from "react";
import CommenSection from "../../Components/commensection/CommenSection";
import "../../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import HeroImage from "../../Assets/home.png";

const Home = () => {
  return (
    <section className="home__section" id="home">
      <CommenSection title="Home" />
      {/* <Header /> */}
      {/* Add your content here */}
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md={12}>
              <div className="left__content">
                <h2>
                  Great <span>Product</span> is <br />
                  <span> built by great teams</span>
                </h2>
                <p className="text-content"> 
                  Welcome to "<span>Smart Coders</span>", where innovation meets reliability.
                  As a startup in software development, we are dedicated to
                  building tailored solutions that empower businesses to succeed
                  in the digital era. Our team specializes in crafting
                  high-quality applications, focusing on performance, user
                  experience, and scalability. Whether you're a small business
                  or a growing enterprise, we bring your ideas to life with
                  cutting-edge technology and personalized support
                </p>
                <button className="btn__contact">Let's get Started</button>
              </div>
            </Col>
            <Col lg="6" md={12}>
              <div className="images">
                <img loading='lazy' src={HeroImage} alt="Hero_image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Home;
