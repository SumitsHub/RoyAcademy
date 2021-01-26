import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const Home = () => {
    const classes = useStyles();
      
    return (
        <div style={{ backgroundColor: '#222e25', width: '100%', paddingBottom:'10px' }}>
            <Container>
                <Row className="justify-content">
                    <Col >
                        <div style={{ marginTop: '10%', color:'white' }}>
                            <img src="https://source.unsplash.com/random/" style={{ width: '100%', height: '300px' }} />
                            <h3 style={{ color: 'white' }}>Description.............</h3>
                            <p>
                            e most formidable challenge for youngster is their career planning.
                        Resoxy is the best academic institute in chandrapur known for preparing the students of medical and engineering streams so that they can easily crack NEET, JEE exams.
                        it is known for its result oriented tea
                            </p>
                        </div>
                    </Col>
                    <Col >
                        <div>
                            <h2 style={{ color: 'white' }}>STUDENT SPEAK</h2>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://source.unsplash.com/random/800x700"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Ram Singh</h3>
                                        <p>"The best teacher teaches from heart not from the book and,
                                        so do the teachers of each student has invisible threads attached with each brick of this institute.
                                            Roy Academy has its own prospective, it blesses the children with the best possible opportunities"</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://source.unsplash.com/random/800x700"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Pyarelal Dhoti</h3>
                                        <p>One of the most promising institute in preparation for IIT- JEE is Resoxy chandrapur. The institute holds highly qualified faculties who have years of experience in their respective field. Under the guidance of this highly expert faculty I feel cracking JEE is easy task.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://source.unsplash.com/random/800x700"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Sachin Tendulkar</h3>
                                        <p>Resoxy, more a family place than a coaching institute . here, the relation between two brothers explaining the beauty of study. I am glad to a part of such a family where the teacher are more than a perfect.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: '#39473d', marginTop: '10px' }}>
                    <Col style={{ marginTop: '5%' }}>
                        <h1 style={{ color: 'white', textAlign: 'center' }}>OUR INSTITUTE</h1>
                        <p style={{ color: 'white', textAlign: 'center' }}>Institute has been set up in accordance with the vision of the future.
                        The global world has thrown up many opportunities as well as challenge.
                        one of the most formidable challenge for youngster is their career planning.
                        Resoxy is the best academic institute in chandrapur known for preparing the students of medical and engineering streams so that they can easily crack NEET, JEE exams.
                        it is known for its result oriented teaching methodology. This is the only institute where teachers are always searching different modalities in finding new and advanced methods and
                        tricks to make learning easier for their students.
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col>
                        <h2 style={{ color: 'white', textAlign: 'center' }}>WHY US?</h2>
                        <h4 style={{ color: 'white', textAlign: 'center' }}>ROY ACADEMY Has a Pool Of Highly Competent and renowned teachers of respective subjects.</h4>
                    </Col>
                </Row>
                <Row style={{ margin: '20px 0' }}>
                    <Col>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Our Values</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                SHAPE-IT Students First Hard Work Accountability Passion Employee Care Integrity
                             </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>Facilities At the Campus</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <ul>
                                        <li>
                                            A RESOXY our students are our first Priority We provide them with an exciting safe and happening environment.
                                        </li>
                                        <li>
                                            The Clean air conditioned classroom help the students to concentrate interact and make full use of the time duration.
                                        </li>
                                        <li>
                                            Study hours after class with seat number and in presence of an invigilator.
                                        </li>
                                        <li>
                                            Daily feedback by highly efficient SMS service.
                                        </li>
                                        <li>
                                        Well Stocked library for use of students. Doubt Removal Classes.
                                        </li>
                                    </ul>
                             </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;