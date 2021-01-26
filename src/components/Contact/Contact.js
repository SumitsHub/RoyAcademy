import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Contact = ()=>{
    return (
        <div style={{ color: 'white', width: '100%', backgroundColor: '#39473d' }}>
            <Container>
                <Row>
                <h1>CONTACT US</h1>
                </Row>
                <Row>
                    <img src="https://source.unsplash.com/random/1000x400"/>
                </Row>
                <Row>
                    Address: 
                </Row>
                <Row>
                    Contact No:
                </Row>
                <Row>
                    Email:
                </Row>
            </Container>
        </div>
    );
}


export default Contact;