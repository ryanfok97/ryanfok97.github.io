import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Home from './Home';
import NavBar from './Header/NavBar';
import Footer from './Footer/Footer'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBG: ''
        };

        this.opaqueNB = this.opaqueNB.bind(this);
        this.transparentNB = this.transparentNB.bind(this);
    }

    opaqueNB() {
        // make it opaque
        this.setState(state => ({
            navBG: 'cornflowerblue'
        }));
    }

    transparentNB() {
        // make it transparent
        this.setState(state => ({
            navBG: ''
        }));
    }

    render() {
        return (
            <Router>
                <div>
                    <NavBar bg={this.state.navBG} />
                    <Route name="home" 
                           exact path="/" 
                           render={(props) => <Home {...props}
                                    opaqueNB={this.opaqueNB} transparentNB={this.transparentNB} />}
                    />
                    <Route name="about" path="/about" />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;