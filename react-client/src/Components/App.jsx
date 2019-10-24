import React, { useEffect, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Home from '../Pages/Home';
import ExperiencePage from '../Pages/ExperiencePage';
import Header from './Header';
import Footer from './Footer'
import ScrollToTop from './ScrollToTop';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBG: ''
        };

        library.add(fab);
        
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
            navBG: 'opaque'
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
                <ScrollToTop />
                <div>
                    <Header bg={this.state.navBG} jumbotronRef={this.jumbotronRef} />
                    <Switch>
                        <Route name="experience"
                            exact path="/experience" 
                        >
                            <ExperiencePage />
                        </Route>
                        <Route name="home" 
                            exact path="/" 
                        >
                            <Home />
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;