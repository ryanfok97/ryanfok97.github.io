import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import bgimg from '../../../IMG_6925.jpg';

class Home extends Component {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        console.log('scroll detected');
        let element = e.target;
        console.log(window.scrollY)
        if (window.scrollY >= 450) {
            this.props.opaqueNB();
        } else if (window.scrollY <= 450) {
            this.props.transparentNB();
        }
    }

    render() {
        return (
            <div>
                <Jumbotron fluid 
                           style={{height: '100vh', backgroundImage: `url('${bgimg}')`, backgroundSize: 'cover'}}>
                    <Container>
                        <h1>What's up?<br/>I'm Ryan Fok.</h1>
                    </Container>
                </Jumbotron>
                <div>
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
                </div>
            </div>
        )
    }
}

export default Home;