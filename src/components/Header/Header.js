import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const [activeRoute, changeActiveRoute] = useState(0);
    // let activeRoute = 0;
    return (
        <>
            <Container>
                <Row>
                    <Col></Col>
                    <Col md="auto" style={{background:'black', color:'white'}}>Mobile No: 1234567890, 0123456789</Col>
                </Row>
            </Container>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/home">Roy Academy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" >
                        <NavLink to="/" onClick={()=>{changeActiveRoute(0); console.log("Clicked!!")}} style={{margin: '0 10px', color:'white', textDecoration: activeRoute===0?"underline":""}}>HOME</NavLink>
                        <NavLink to="/courses"  onClick={()=>{changeActiveRoute(1)}} style={{margin: '0 10px', color:'white', textDecoration: activeRoute===1?"underline":""}}>COURSES</NavLink>
                        <NavLink to="/result" onClick={()=>{changeActiveRoute(2)}} style={{margin: '0 10px', color:'white', textDecoration: activeRoute===2?"underline":""}}>RESULT</NavLink>
                        <NavLink to="/admission" onClick={()=>{changeActiveRoute(3)}} style={{margin: '0 10px', color:'white', textDecoration: activeRoute===3?"underline":""}}>ADMISSION</NavLink>
                        <NavLink to="/contact" onClick={()=>{changeActiveRoute(4)}} style={{margin: '0 10px', color:'white', textDecoration: activeRoute===4?"underline":""}}>CONTACT US</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;