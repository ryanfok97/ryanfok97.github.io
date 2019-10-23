import React, { Component } from 'react';

import AboutMe from '../Components/AboutMe';
import Interests from '../Components/Interests';
import Principles from '../Components/Principles';

class Home extends Component {
    render() {
        return (
            <div>
                <AboutMe
                    classes='light-gray-bg padded'
                />

                <Interests 
                    classes='padded'
                />

                <Principles 
                    classes='center light-gray-bg padded'
                />
            </div>
        )
    }
}

export default Home;