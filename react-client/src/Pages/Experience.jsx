import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';

class Experience extends Component {
    render() {
        return (
            <div style={{padding: '2em 20em'}}>
                <h1 style={{color: 'red'}}>
                    Work In Progress
                </h1>
                <Row>
                    <Col xs sm='auto'>
                        <Image
                            src={require('../../../assets/cselogo.png')}
                            className='roundedBorder'
                            width={300}
                        />
                    </Col>
                    <Col>
                        <h2 className='primary'>CSE 180 Undergraduate Teaching Assistant</h2>
                        <h3>University of Washington</h3>
                        <ul>
                            <li>Co-led a quiz section of 20+ students for an experimental Introduction to Data Science course</li>
                            <li>Provided one-on-one assistance for students to debug their code</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs sm='auto'>
                        
                    </Col>
                    <Col>
                        <h3>President</h3>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Experience;