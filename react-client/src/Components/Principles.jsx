import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

class Principles extends Component {
    render() {
        return (
            <Container fluid className={this.props.classes}>
                <h2 className='my-primary'>Some principles I live by.</h2>
                <h3>Have fun and be yourself.</h3>
                <h3>Do what you love doing.</h3>
                <h3>Surround yourself with the right people.</h3> 
                <h3>Keep learning and growing.</h3>
                <h3>Always learn from mistakes and failures.</h3>
                <h3>Live life without regret; don't wonder "what if".</h3>
                <h3>Be a better you than you were yesterday.</h3>
            </Container>
        );
    }
}

export default Principles;