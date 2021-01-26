import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import data from './ResultData';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});


const Result = () => {
    const classes = useStyles();
    return (
        <div style={{ color: 'white', width: '100%', backgroundColor: '#39473d' }}>
            <Container>
                <Row>
                    <h1>RESULTS</h1>
                </Row>
                <Row style={{marginTop:'20px'}}><h5>STUDENT SELECTED IN IITS TAUGHT BY OUR FACULTIES:</h5></Row>
                <Row>
                    <div style={{
                        display: 'flex',
                        height: '200px',
                        flexWrap: 'wrap',
                        alignContent: 'space-between',
                        textAlign:'center'
                    }}>
                        {data.map((item, index) => {
                            return (
                                <div style={{marginLeft:'10px'}}>
                                    <span>{item.year}</span><br />
                                    <img src="https://source.unsplash.com/random/" style={{ width: '100px', height: '121px' }} /><br />
                                    <span>{item.name}</span><br />
                                    <span>{item.collegeName}</span>
                                </div>
                            )
                        })}
                    </div>
                </Row>
                <Row style={{marginTop:'20px'}}><h5>STUDENT SELECTED IN TOP MEDICAL COLLEGES TAUGHT BY OUR FACULTIES:</h5></Row>
                <Row>
                    <div style={{
                        display: 'flex',
                        height: '200px',
                        flexWrap: 'wrap',
                        alignContent: 'space-between',
                        textAlign: 'center'
                    }}>
                        {data.map((item, index) => {
                            return (
                                <div style={{marginLeft:'10px'}}>
                                    <span>{item.year}</span><br />
                                    <img src="https://source.unsplash.com/random/" style={{ width: '100px', height: '121px' }} /><br />
                                    <span>{item.name}</span><br />
                                    <span>{item.collegeName}</span>
                                </div>
                            )
                        })}
                    </div>
                </Row>
                <Row style={{marginTop:'20px'}}><h5>STUDENT SELECTED IN NITS TAUGHT BY OUR FACULTIES:</h5></Row>
                <Row>
                    <div style={{
                        display: 'flex',
                        height: '200px',
                        flexWrap: 'wrap',
                        alignContent: 'space-between',
                        textAlign: 'center'
                    }}>
                        {data.map((item, index) => {
                            return (
                                <div style={{marginLeft:'10px'}}>
                                    <span>{item.year}</span><br />
                                    <img src="https://source.unsplash.com/random/" style={{ width: '100px', height: '121px' }} /><br />
                                    <span>{item.name}</span><br />
                                    <span>{item.collegeName}</span>
                                </div>
                            )
                        })}
                    </div>
                </Row>
                <Row style={{marginTop:'20px'}}><h5>STUDENT SELECTED IN STATE COLLEGES TAUGHT BY OUR FACULTIES :</h5></Row>
                <Row>
                    <div style={{
                        display: 'flex',
                        height: '200px',
                        flexWrap: 'wrap',
                        alignContent: 'space-between',
                        textAlign: 'center'
                    }}>
                        {data.map((item, index) => {
                            return (
                                <div style={{marginLeft:'10px'}}>
                                    <span>{item.year}</span><br />
                                    <img src="https://source.unsplash.com/random/" style={{ width: '100px', height: '121px' }} /><br />
                                    <span>{item.name}</span><br />
                                    <span>{item.collegeName}</span>
                                </div>
                            )
                        })}
                    </div>
                </Row>
                <Row style={{marginTop:'20px'}}><h5>STUDENT WHO TOPPED IN BOARDS TAUGHT BY OUR FACULTIES:</h5></Row>
                <Row>
                    <div style={{
                        display: 'flex',
                        height: '200px',
                        flexWrap: 'wrap',
                        alignContent: 'space-between',
                        textAlign: 'center'
                    }}>
                        {data.map((item, index) => {
                            return (
                                <div style={{marginLeft:'10px'}}>
                                    <span>{item.year}</span><br />
                                    <img src="https://source.unsplash.com/random/" style={{ width: '100px', height: '121px' }} /><br />
                                    <span>{item.name}</span><br />
                                    <span>{item.collegeName}</span>
                                </div>
                            )
                        })}
                    </div>
                </Row>
            </Container>

        </div>
    );
}

export default Result;