import React, { Component } from 'react';
import { Image, Col, Row } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <div style={{backgroundColor: 'lightgray', padding: '2em 20em'}}>
                    <h1 className='center'>
                        A little about me.
                    </h1>
                    <p className='center'>
                        I'm Ryan, a graduate of the University of Washington with a B.S. in
                        Computer Science. Wisconsin-born and Washington-raised, I come from a family
                        of medical professionals, which may beg the question,<br/>why Computer Science?<br/>
                        <br/>
                        <b>The short answer:</b><br/>
                        I love problem-solving, challenging myself, and puzzles of all kinds.<br/>
                        <br/>
                        <b>The <i>slightly</i> longer answer:</b><br/>
                        I am always pushing myself to try new things, whether it be in the classroom or
                        not. This led me to try Computer Science in my first quarter of college, which led
                        me to finish the pre-requisites for the major that same year, which led me to...well
                        here! I enjoy having to think outside the box to code the different pieces to a puzzle,
                        then seeing them come together to produce a desired solution. In this way, I see
                        Computer Science as a challenging way to solve pieces of the problems we face in the
                        puzzle that is our increasingly technological society.
                    </p>
                </div>

                <div style={{padding: '2em 20em'}}>
                    <h1 className='center'>
                        Some of my interests.
                    </h1>
                    <Row className='interests'>
                        <Col xs sm='auto'>
                            <Image src={require('../../../assets/porca.jpg')} roundedCircle height={180} />
                        </Col>
                        <Col>
                            <h3>Music.</h3>
                            <p>
                                I love singing and playing guitar (classical and acoustic) or ukulele. More
                                often than not, I'm listening to music while doing daily activities. To me,
                                music is a thread that connects us all in spite of our differences and reveals
                                traits about us that we sometimes don't know ourselves. My music tastes vary
                                from day-to-day, but I think a good way to describe most of what I listen to
                                (and, consequently, me) is <b>easygoing</b>.
                            </p>
                        </Col>
                    </Row>
                    <Row className='interests'>
                        <Col>
                            <h3>Dance.</h3>
                            <p>
                                More recently, I've fallen in love with dance. In college, I participated in
                                both traditional Filipino folk dance and hip-hop. Dancing gave me a loving
                                community that I can call home, and gave me a break from my STEM-heavy
                                classwork. It was a place where I could unapologetically be myself, and was a
                                constant for me throughout my college years, which is why I <b>dedicated</b> so
                                much of my time to it.
                            </p>
                        </Col>
                        <Col xs sm='auto'>
                            <Image src={require('../../../assets/porca.jpg')} roundedCircle height={180} />
                        </Col>
                    </Row>
                    <Row className='interests'>
                        <Col xs sm='auto'>
                            <Image src={require('../../../assets/porca.jpg')} roundedCircle height={180} />
                        </Col>
                        <Col>
                            <h3>Games</h3>
                            <p>
                                Yes, I do play video games. I'll usually play ones that involve some sort of
                                strategy so that I'm not just mindlessly clicking away, but I probably spend
                                more time playing puzzle games and word games on my phone. This includes, but
                                is not limited to, Sudoku, Minesweeper, crossword puzzles, Boggle, and 7 Little
                                Words. These kinds of games, particularly the word games, force me to exercise
                                my mind and <b>think outside the box</b>, especially when given ambiguous clues.
                            </p>
                        </Col>
                    </Row>
                </div>

                <div className='center' style={{backgroundColor: 'lightgray', padding: '2em 20em'}}>
                    <h1>
                        Some principles I live by.
                    </h1>
                    <h3>Have fun and be yourself.</h3>
                    <h3>Do what you love doing.</h3>
                    <h3>Surround yourself with the right people.</h3> 
                    <h3>Keep learning and growing.</h3>
                    <h3>Always learn from mistakes and failures.</h3>
                    <h3>Live life without regret; don't wonder "what if".</h3>
                    <h3>Be a better you than you were yesterday.</h3>
                </div>
            </div>
        )
    }
}

export default Home;