import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './NavBar.css'
import { Col, Container, Badge, Nav, Navbar, Row } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../APPAuthFiles/Data/AuthContext';
import { useShoppingCart } from '../../Data/ContextData';
import logo from "../../../images/logo.png"
const NavBar = () => {
  const { handlelogOut, currentUser } = useAuth();
  const { handleShow ,getCountOFCartItem} = useShoppingCart();
  const navigate = useNavigate();


  const signOUt = async () => {
    try {
      await handlelogOut();
      navigate("/login")
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <>
      {/* First Row: Email and Logout */}
      <Navbar className='fixed-top pt-auto' style={{ backgroundColor: '#333', height: "90px" }} variant="dark">
        <Container className="pb-3">
          <Row className="w-100 pt-3">
            <Col className="d-flex justify-content-center align-items-center">
              <Navbar.Text   style={{ color: '#fff',fontSize :"20px"}}>
              <i className="bi bi-person-circle"> {currentUser.email}</i>   
              </Navbar.Text>
            </Col>
            <Col className="d-flex justify-content-end">

              <button onClick={signOUt} className="Btn">
                <div className="sign">
                  <i className="bi bi-box-arrow-right fs-5"></i>
                </div>

                <div className="text">Logout</div>
              </button>

            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* Second Row: Logo, Navigation Links, and Cart */}
      <Navbar className='fixed-top handle' style={{ backgroundColor: '#333', top: "60px", marginBottom: "300px"  }} variant="dark">
        <Container className='w-100'>
          <Row className="w-100 d-flex align-items-center">
            <Col className="d-flex justify-content-start">
              <Navbar.Brand href="/home">
                <img style={{width:"150px",height:"100px",objectFit:"contain"}} src={logo} alt="logo" />
              </Navbar.Brand>
            </Col>
            <Col className="d-flex justify-content-center">
              <Nav>
                <Nav.Link as={NavLink} to="/home" style={{ color: '#fff' }}>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/about" style={{ color: '#fff' }}>About</Nav.Link>
                <Nav.Link as={NavLink} to="/contact" style={{ color: '#fff' }}>Contact</Nav.Link>
                <Nav.Link as={NavLink} to="/products" style={{ color: '#fff' }}>Product</Nav.Link>
              </Nav>
            </Col>
            <Col className="d-flex justify-content-end">
              <Nav.Link style={{ color: '#fff', position: 'relative' }} onClick={handleShow}>
                <FaShoppingCart size={24} />
                {getCountOFCartItem > 0 && (
                  <Badge pill bg="danger" style={{ position: 'absolute', top: -10, right: -10 }}>
                    {getCountOFCartItem}
                  </Badge>
                )}
              </Nav.Link>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>



  )
}

export default NavBar