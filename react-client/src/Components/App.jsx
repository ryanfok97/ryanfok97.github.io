import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Home from './Home';
import NavBar from './Header/NavBar';
import Footer from './Footer/Footer'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route name="home" exact path="/" component={Home} />
                    <Route name="about" path="/about" />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;