import React, { Component } from 'react';
import { Image, Col, Row } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div style={{padding: '0em 20em'}}>
                <h1 className='center'>
                    A little about me.
                </h1>
                <p className='center'>
                    I'm Ryan, a graduate of the University of Washington with a B.S. in
                    Computer Science. Wisconsin-born and Washington-raised, I come from a family
                    of medical professionals, which may beg the question,<br/>why Computer Science?<br/>
                    <br/>
                    <span style={{fontWeight: 'bold'}}>The short answer:</span><br/>
                    I love problem-solving, challenging myself, and puzzles of all kinds.<br/>
                    <br/>
                    <span style={{fontWeight: 'bold'}}>The <span style={{fontStyle: 'italic'}}>
                        slightly</span> longer answer:</span><br/>
                    I am always pushing myself to try new things, whether it be in the classroom or
                    not. This led me to try Computer Science in my first quarter of college, which led
                    me to finish the pre-requisites for the major that same year, which led me to...well
                    here! I enjoy having to think outside the box to code the different pieces to a puzzle,
                    then seeing them come together to produce a desired solution.
                </p>

                <Row>
                    <Col xs sm='auto'>
                        <Image src={require('../../../assets/porca.jpg')} roundedCircle height={180} />
                    </Col>
                    <Col>
                        blah
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;