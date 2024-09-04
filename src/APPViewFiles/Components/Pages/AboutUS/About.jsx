import React from 'react';
import './about.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaHistory, FaBullseye } from 'react-icons/fa';
const About = () => {
  return (
  <>
    <Container className='containerAbout'  style={{ color: '#333', marginTop: '50px' }}>
    <Row className="justify-content-center">
      <Col md={8}>
        <h2 className="text-center mb-4">About Us</h2>
        <p>
          Welcome to our company! We are dedicated to providing the best service possible. Our team is composed of experienced professionals who are passionate about what they do.
        </p>
      </Col>
    </Row>
    <Row className="mt-5">
      <Col md={4} className="text-center">
        <FaUsers size={50} />
        <h4>Our Team</h4>
        <p>We have a diverse and talented team committed to excellence.</p>
      </Col>
      <Col md={4} className="text-center">
        <FaHistory size={50} />
        <h4>Our History</h4>
        <p>Founded in 2000, we have a rich history of innovation and growth.</p>
      </Col>
      <Col md={4} className="text-center">
        <FaBullseye size={50} />
        <h4>Our Mission</h4>
        <p>Our mission is to deliver high-quality products that meet our customers' needs.</p>
      </Col>
    </Row>
  </Container>
  
  
  </>
  )
}

export default About