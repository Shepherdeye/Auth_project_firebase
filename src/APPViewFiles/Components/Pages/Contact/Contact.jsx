import React from 'react';
import "./contact.css"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <Container className='containercontact ' style={{ color: '#333',  }}>
    <Row className="justify-content-center">
      <Col md={8}>
        <h2 className="text-center mb-4">Contact Us</h2>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
    <Row className="mt-5">
      <Col md={4} className="text-center">
        <FaMapMarkerAlt size={30} />
        <p>123 Main Street, City, Country</p>
      </Col>
      <Col md={4} className="text-center">
        <FaPhone size={30} />
        <p>+123 456 7890</p>
      </Col>
      <Col md={4} className="text-center">
        <FaEnvelope size={30} />
        <p>info@example.com</p>
      </Col>
    </Row>
  </Container>  )
}

export default Contact