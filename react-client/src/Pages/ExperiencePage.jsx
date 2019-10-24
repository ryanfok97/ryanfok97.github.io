import React, { Component } from 'react';

import Experience from '../Components/Experience';

class ExperiencePage extends Component {
    render() {
        return (
            <div className='padded'>
                <h1 className='center my-primary'>
                    Some things I've done.
                </h1>
                <Experience />
            </div>
        )
    }
}

export default ExperiencePage;