import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid style={{backgroundImage: 'url(/IMG_6925.jpg)', backgroundSize: 'cover'}}>
                        <h1>What's up?<br/>I'm Ryan Fok.</h1>
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