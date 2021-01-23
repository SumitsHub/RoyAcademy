import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap'
import {NavLink} from 'react-router-dom';

const Header = () => {
    const [activeRoute, changeActiveRoute] = useState("/");
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
                    <Nav className="mr-auto" activeKey={`${activeRoute}`}>
                        <Nav.Link href="/" onSelect={()=>{changeActiveRoute("/")}}>HOME</Nav.Link>
                        <Nav.Link href="/courses" onSelect={()=>{changeActiveRoute("/courses")}}>COURSES</Nav.Link>
                        <Nav.Link href="/result" onSelect={()=>{changeActiveRoute("/courses")}}>RESULT</Nav.Link>
                        <Nav.Link href="/admission" onSelect={()=>{changeActiveRoute("/admission")}}>ADMISSION</Nav.Link>
                        <Nav.Link href="/contact" onSelect={()=>{changeActiveRoute("/contact")}}>CONTACT US</Nav.Link>
                    </Nav>
                    {/* <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;