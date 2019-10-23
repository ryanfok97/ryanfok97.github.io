import React, { Component } from 'react';
import { Figure, Col, Row } from 'react-bootstrap';

class Interests extends Component {
    render() {
        let width = window.innerWidth;
        if (width > 768) {
        return (
            <div className={this.props.classes}>
                <h2 className='center'>Some of my interests.</h2>
                <Row className='margin-bottom v-align'>
                    <Col xs sm='auto'>
                        <Figure>
                            <Figure.Image 
                                src={require('../../../assets/singing.jpg')}
                                className='roundedBorder'
                                width={300}
                                fluid={false}
                                alt='Me performing Michael Buble at Pasifik Voices Winter 2019.'
                            />
                            <Figure.Caption className='center' style={{width: '300px'}}>
                                Me performing Michael Buble at Pasifik Voices, Winter 2019.
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                        <h3 className='interestTitle'>Music.</h3>
                        <p>
                            Music plays a major role in my daily life; I can sing, play guitar (classical
                            and acoustic), and play ukulele. More often than not, I'm listening to music
                            while doing daily activities, from driving to coding to falling asleep. In my
                            eyes, music is a thread that connects us all in spite of our differences, and
                            it has the potential to reveal traits about us that we sometimes don't know
                            ourselves. My music tastes vary from day-to-day depending on a lot of factors,
                            but I think a good way to describe most of what I listen to (and, consequently,
                            me) is <b>easygoing</b>.
                        </p>
                    </Col>
                </Row>
                <Row className='margin-bottom v-align'>
                    <Col>
                        <h3 className='interestTitle'>Dance.</h3>
                        <p>
                            More recently, I've fallen in love with dance. In college, I participated in
                            both <a href='https://www.facebook.com/sayaw.fasa.uw/' className='text-link'
                            target='_blank'>traditional Filipino folk dance (Sayaw)</a> and hip-hop (Legacy).
                            Dancing gave me two loving communities that I can call home, and gave me a break
                            from my STEM-heavy classwork. Sayaw, especially, was a place where I could
                            unapologetically be myself, and simply have fun, which is why I <b>dedicated</b> so
                            much time to it (every Friday!).
                        </p>
                    </Col>
                    <Col xs sm='auto'>
                        <Figure>
                            <Figure.Image
                                src={require('../../../assets/sayaw.jpg')}
                                className='roundedBorder'
                                width={300}
                                fluid={false}
                                alt='Sayaw (including me!) performing at Filipino Night 2019.'
                            />
                            <Figure.Caption className='center' style={{width: '300px'}}>
                                Sayaw (including me!) performing our Muslim suite at Filipino Night 2019.
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
                <Row className='v-align'>
                    <Col xs sm='auto'>
                        <Figure>
                            <Figure.Image
                                src={require('../../../assets/sudoku.jpg')}
                                className='roundedBorder'
                                width={300}
                                fluid={false}
                                alt='A screenshot from a sudoku app I made to learn ReactJS.'
                            />
                            <Figure.Caption className='center' style={{width: '300px'}}>
                                A screenshot from the Sudoku web app I made to learn ReactJS.
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                        <h3 className='interestTitle'>Games.</h3>
                        <p>
                            Yes, I do play video games, though I'll usually play ones that involve some sort of
                            strategy so that I'm not just mindlessly clicking away. However, I probably spend
                            more time playing puzzle games and word games on my phone. This includes, but
                            is not limited to, Sudoku, Minesweeper, crossword puzzles, Boggle, and 7 Little
                            Words. These kinds of games, particularly the word games, force me to exercise
                            my mind and <b>think outside the box</b>, especially when given ambiguous clues.
                        </p>
                    </Col>
                </Row>
            </div>
        );
        } else {
            // TODO: only difference is centering everything and order of picture, description -- see if 
            // there's a better way to organize this
            return (
                <div className={'center ' + this.props.classes}>
                    <h2>Some of my interests.</h2>
                    <Row className='margin-bottom v-align'>
                        <Col xs sm='auto'>
                            <Figure>
                                <Figure.Image 
                                    src={require('../../../assets/singing.jpg')}
                                    className='roundedBorder'
                                    width={300}
                                    fluid={false}
                                    alt='Me performing Michael Buble at Pasifik Voices Winter 2019.'
                                />
                                <Figure.Caption className='center' style={{width: '300px'}}>
                                    Me performing Michael Buble at Pasifik Voices, Winter 2019.
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <h3 className='greenText'>Music.</h3>
                            <p>
                                Music plays a major role in my daily life; I can sing, play guitar (classical
                                and acoustic), and play ukulele. More often than not, I'm listening to music
                                while doing daily activities, from driving to coding to falling asleep. In my
                                eyes, music is a thread that connects us all in spite of our differences, and
                                it has the potential to reveal traits about us that we sometimes don't know
                                ourselves. My music tastes vary from day-to-day depending on a lot of factors,
                                but I think a good way to describe most of what I listen to (and, consequently,
                                me) is <b>easygoing</b>.
                            </p>
                        </Col>
                    </Row>
                    <Row className='margin-bottom v-align'>
                        <Col xs sm='auto'>
                            <Figure>
                                <Figure.Image
                                    src={require('../../../assets/sayaw.jpg')}
                                    className='roundedBorder'
                                    width={300}
                                    fluid={false}
                                    alt='Sayaw (including me!) performing at Filipino Night 2019.'
                                />
                                <Figure.Caption className='center' style={{width: '300px'}}>
                                    Sayaw (including me!) performing our Muslim suite at Filipino Night 2019.
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <h3 className='greenText'>Dance.</h3>
                            <p>
                                More recently, I've fallen in love with dance. In college, I participated in
                                both <a href='https://www.facebook.com/sayaw.fasa.uw/' className='text-link'
                                target='_blank'>traditional Filipino folk dance (Sayaw)</a> and hip-hop (Legacy).
                                Dancing gave me two loving communities that I can call home, and gave me a break
                                from my STEM-heavy classwork. Sayaw, especially, was a place where I could
                                unapologetically be myself, and simply have fun, which is why I <b>dedicated</b> so
                                much time to it (every Friday!).
                            </p>
                        </Col>
                    </Row>
                    <Row className='v-align'>
                        <Col xs sm='auto'>
                            <Figure>
                                <Figure.Image
                                    src={require('../../../assets/sudoku.jpg')}
                                    className='roundedBorder'
                                    width={300}
                                    fluid={false}
                                    alt='A screenshot from a sudoku app I made to learn ReactJS.'
                                />
                                <Figure.Caption className='center' style={{width: '300px'}}>
                                    A screenshot from the Sudoku web app I made to learn ReactJS.
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <h3 className='greenText'>Games.</h3>
                            <p>
                                Yes, I do play video games, though I'll usually play ones that involve some sort of
                                strategy so that I'm not just mindlessly clicking away. However, I probably spend
                                more time playing puzzle games and word games on my phone. This includes, but
                                is not limited to, Sudoku, Minesweeper, crossword puzzles, Boggle, and 7 Little
                                Words. These kinds of games, particularly the word games, force me to exercise
                                my mind and <b>think outside the box</b>, especially when given ambiguous clues.
                            </p>
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}

export default Interests;