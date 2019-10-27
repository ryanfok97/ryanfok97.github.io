import React, { Component } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

class Experience extends Component {
    render() {
        return (
            <Container>
                <Row className='margin-bottom v-align'>
                    <Col xs sm='auto'>
                        <Image
                            src={require('../../../assets/cselogo.png')}
                            className='roundedBorder image-bg'
                            width={300}
                        />
                    </Col>
                    <Col>
                        <h4>CSE 180 Undergraduate TA</h4>
                        <h5 className='my-secondary'>University of Washington</h5>
                        <h5 className='text-secondary'>Mar. 2019 - Jun. 2019</h5>
                        <ul>
                            <li>
                                Co-led a quiz section of 20+ students for an experimental 
                                Introduction to Data Science course
                            </li>
                            <li>
                                Assisted students in debugging their code by walking through
                                it with them
                            </li>
                            <li>
                                Held weekly office hours to grade projects and help students
                                get past any obstacles
                            </li> 
                        </ul>
                    </Col>
                </Row>
                <Row className='margin-bottom v-align'>
                    <Col xs sm='auto'>
                        <Image
                            src={require('../../../assets/genoalogo.png')}
                            className='roundedBorder image-bg'
                            width={300}
                        />
                    </Col>
                    <Col>
                        <h4>Information Technology Intern</h4>
                        <h5 className='my-secondary'>Genoa Healthcare</h5>
                        <h5 className='text-secondary'>Jun. 2018 - Jun. 2019</h5>
                        <ul>
                            <li>
                                Developed a program to parse and organize pharmacy claims data into
                                SQL tables to help with cost analysis
                            </li>
                            <li>
                                Developed a web application to streamline call center campaigns and
                                handle the movement of patient data
                            </li>
                            <li>Tested internal business applications throughout development using JIRA</li>
                        </ul>
                    </Col>
                </Row>
                <Row className='margin-bottom v-align'>
                    <Col xs sm='auto'>
                        <Image
                            src={require('../../../assets/fasalogo.png')}
                            className='roundedBorder image-bg'
                            width={300}
                        />
                    </Col>
                    <Col>
                        <h4>President</h4>
                        <h5 className='my-secondary'>Filipino American Student Association at UW</h5>
                        <h5 className='text-secondary'>May 2018 - Jun. 2019</h5>
                        <ul>
                            <li>Led a 100+ member student organization with a 13-officer team</li>
                            <li>
                                Promoted leadership development for officers and members through
                                workshops and alumni networking
                            </li>
                            <li>
                                Assisted in developing and reimagining successful events and programming
                                for members by providing constant feedback to officers in charge
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className='margin-bottom v-align'>
                    <Col xs sm='auto'>
                        <Image
                            src={require('../../../assets/cklogo.png')}
                            className='roundedBorder image-bg'
                            width={300}
                        />
                    </Col>
                    <Col>
                        <h4>Assistant Teacher</h4>
                        <h5 className='my-secondary'>Computing Kids</h5>
                        <h5 className='text-secondary'>Dec. 2017 - Mar. 2018</h5>
                        <ul>
                            <li>
                                Helped teach basic programming concepts to a class of 10+ elementary
                                schoolers
                            </li>
                            <li>Created and executed lesson plans in collaboration with the lead teacher</li>
                            <li>
                                Connected with students and helped them create projects that related to
                                their interests
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className='v-align'>
                    <Col xs sm='auto'>
                        <Image
                            src={require('../../../assets/fasalogo.png')}
                            className='roundedBorder image-bg'
                            width={300}
                        />
                    </Col>
                    <Col>
                        <h4>Secretary</h4>
                        <h5 className='my-secondary'>Filipino American Student Association at UW</h5>
                        <h5 className='text-secondary'>May 2017 - Jun. 2018</h5>
                        <ul>
                            <li>Maintained constant communication with officers to organize event logistics</li>
                            <li>Maintained the calendar for all organization events and programming</li>
                            <li>Corresponded to organization emails frequently and professionally</li>
                            <li>
                                Created and sent out weekly announcements detailing organization and community
                                events and opportunities for members
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Experience;