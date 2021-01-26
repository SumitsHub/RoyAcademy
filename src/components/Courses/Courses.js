import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        // overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 700,
        height: 700,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const Courses = () => {
    const classes = useStyles();
    return (
        <div style={{ color: 'white', width: '100%', backgroundColor: '#39473d' }}>
            <Container>
                <Row>
                    <h1 style={{}}>COURSES..</h1>
                </Row>
                <Row>
                    <Col>
                        <p>
                            Resoxy is the best academic institute in Chandrapur Known for preparing the students of medical and engineering streams.
                            So that they can easily crack NEET JEE exams.
                            The faculty of Resoxy has made enormous strides in academics.
                            Every engineering and medical aspirant has always felt a need for aptitude and aptitude development in the urge of excellence and perfection.
                            To look into the problem objectively and to develop excellent examination temperament with problem solving skill,the institute was launched.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.root}>
                            <GridList cellHeight={180} className={classes.gridList}>
                                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                                    <ListSubheader component="div">Courses</ListSubheader>
                                </GridListTile>
                                <GridListTile>
                                        <img src="https://source.unsplash.com/random/" alt="alt text" />
                                        <GridListTileBar
                                            title="IIT-JEE"
                                            subtitle="(Mains+Advanced)"
                                        />
                                </GridListTile>
                                <GridListTile>
                                        <img src="https://source.unsplash.com/random/" alt="alt text" />
                                        <GridListTileBar
                                            title="NEET"
                                            subtitle="(National Eligibility Entrance Test)"
                                        />
                                </GridListTile>
                                <GridListTile>
                                        <img src="https://source.unsplash.com/random/" alt="alt text" />
                                        <GridListTileBar
                                            title="KVPY"
                                            subtitle="(Kishore Vaigyanik Protsahan Yojana)"
                                        />
                                </GridListTile>
                                <GridListTile>
                                        <img src="https://source.unsplash.com/random/" alt="alt text" />
                                        <GridListTileBar
                                            title="MHTCET"
                                            subtitle="(Maharashtra Health and Technical Common Entrance Test)"
                                        />
                                </GridListTile>
                                <GridListTile>
                                        <img src="https://source.unsplash.com/random/" alt="alt text" />
                                        <GridListTileBar
                                            title="XI-XII Boards"
                                            subtitle=""
                                        />
                                </GridListTile>
                                <GridListTile>
                                        <img src="https://source.unsplash.com/random/" alt="alt text" />
                                        <GridListTileBar
                                            title="Foundation courses"
                                            subtitle="(8th,9th,10th,NTSE)"
                                        />
                                </GridListTile>
                               
                                
                            </GridList>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Courses;