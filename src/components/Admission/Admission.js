import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 445,
    },
    media: {
        height: 140,
    },
});

export default () => {
    const classes = useStyles();
    return (
        <div style={{ color: 'white', width: '100%', backgroundColor: '#39473d', paddingBottom:'10px'}}>
            <Container>
                <Row>
                    <h1 style={{}}>INFORMATION FOR ADMISSION PROGRAM..</h1>
                </Row>
                <Row style={{marginTop:'10px'}}>
                    <Col>
                        <Card className={classes.root} style={{height:'250px'}}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    FOR STUDENT OF XI
                                    </Typography>
                                    <h5>Two Years Classroom Program</h5>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    The entire syllabus of NEET.JEE(Mains and Advanced),BITS,NDA and SAT as well as syllabus of XI and XII board are covered under this program.
                                    The preparation for competitive exams and board level studies are taken up simultaneousely right from the beginning.
                                    Apart from Classroom studies,Test Series form part of the program.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col>
                    <Card className={classes.root} style={{height:'250px'}}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    FOR STUDENT OF XII
                                    </Typography>
                                    <h5>One Year Classroom Program</h5>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    The entire Syllabus of NEET AIIMS, JEE (Mains and Advanced), NDA and SAT covered under this program and also the preparation for other Medical and Non-Medical Entrance Exams along with XII Board Exams is taken up.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginTop:'10px'}}>
                    <Col>
                    <Card className={classes.root} style={{height:'180px'}}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    FOR XII PASS STUDENTS
                                    </Typography>
                                    <h5>One Year Classroom Program</h5>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Repeaters Batch(Medical/Engineering) The entire Syllabus of NEEET,JEE(Mains and Advanced), NDA and SAT and other competitive exams are covered.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col>
                    <Card className={classes.root} style={{height:'180px'}}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    FOR XII PASS STUDENTS
                                    </Typography>
                                    <h5>Crash Course(Medical/Non-Medical)</h5>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Course Plan- Classroom Study Material and Test Series.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}