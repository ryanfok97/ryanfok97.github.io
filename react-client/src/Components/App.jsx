import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Experience from '../Pages/Experience';
import Header from './Header';
import Footer from './Footer'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBG: ''
        };

        this.jumbotronRef = React.createRef();

        this.opaqueNB = this.opaqueNB.bind(this);
        this.transparentNB = this.transparentNB.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
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
            this.opaqueNB();
        } else if (window.scrollY <= bottomOfJumbotron) {
            this.transparentNB();
        }
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
                    <Header bg={this.state.navBG} jumbotronRef={this.jumbotronRef} />
                    <Route name="home" 
                           exact path="/" 
                           render={(props) => <Home {...props}
                                    // jumbotronRef={this.jumbotronRef}
                                    opaqueNB={this.opaqueNB} transparentNB={this.transparentNB} />}
                    />
                    {/* <Route name="about" path="#about" component={About} /> */}
                    <Route name="experience"
                           exact path="/experience" 
                           render={(props) => <Experience {...props}
                                    // jumbotronRef={this.jumbotronRef} 
                                    />}
                    />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;