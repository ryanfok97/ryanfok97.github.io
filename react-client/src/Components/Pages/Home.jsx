import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import bgimg from '../../../../IMG_6925.jpg';

class Home extends Component {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
        this.jumbotronRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        // console.log('scroll detected');
        let bottomOfJumbotron = this.jumbotronRef.current.getBoundingClientRect().height;
        // console.log(this.jumbotronRef.current.getBoundingClientRect().height);
        if (window.scrollY >= bottomOfJumbotron) {
            this.props.opaqueNB();
        } else if (window.scrollY <= bottomOfJumbotron) {
            this.props.transparentNB();
        }
    }

    render() {
        return (
            <div>
                <Jumbotron fluid
                           ref={this.jumbotronRef}
                           style={{height: '100vh', background: `url('${bgimg}') fixed`, backgroundSize: 'cover'}}>
                    <Container>
                        <h3>
                            What's up? I'm
                        </h3>
                        <h1>
                            R<span style={{fontSize: '.8em'}}>YAN</span> F<span style={{fontSize: '.8em'}}>OK</span>
                        </h1>
                    </Container>
                </Jumbotron>
                <div style={{marginTop: '200px', backgroundColor: 'white'}}>
                    <p>
                    blah blah blah
                    <br/>
                    stuff about me lol
                    <br/>
                    taking
                    <br/>
                    up<br/>
                    more<br/>
                    space<br/>
                    so<br/>
                    i<br/>
                    can<br/>
                    test<br/>
                    scrolling<br/>
                    here<br/>
                    <br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    Slam...<br/>
                    poetry.<br/>
                    Yelling! Angry! Waving my hands a LOT!<br/>
                    Specific point of view on THINGS!<br/>
                    Cynthia!<br/>
                    Cyn-thi-a!<br/>
                    Jesus died for our sin-thi-as!<br/>
                    Jesus cried, runaway bride.<br/>
                    Julia Roberts!<br/>
                    Julia Rob...hurts!<br/>
                    Cynthia!<br/>
                    Ooh, Cynthia.<br/>
                    You're dead. You are dead.<br/>
                    Bop boop beep bop bop boop bop.<br/>
                    You're dead.<br/>
                    That's for Cynthia...<br/>
                    who's dead.
                    </p>
                </div>
            </div>
        )
    }
}

export default Home;