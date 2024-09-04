import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './home.css'
import imageSrc from "../../../../images/photo.png"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <Container   fluid  className="d-flex justify-content-center align-items-center responsive" style={{ height: '100vh' }}>
      <div className="content-container ">
        <Row>
          <Col md={6} className="left-div pt-3">
            <h2>Come an Get What You want</h2>
            <p>Your paragraph text goes here. It can be a description or any other text.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Dolor minima id ea voluptas fugiat! Eveniet dolore molestias
                voluptas nihil iure eaque maxime minus obcaecati eos.
               Veniam tempore recusandae mollitia sequi!</p>
           <div className='d-flex align-items-center justify-content-start'>
          <Link to ="/products">
               <Button variant="primary">Shopping Now</Button>
          </Link>
           </div>
            <div className="social-media-bar">
              {/* Add your social media icons here */}
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </Col>
          <Col md={6} className="right-div">
            <img src={imageSrc} alt="Your description" className="animated-image" />
          </Col>
        </Row>
      </div>
     
    </Container>
   

  )
}

export default Home