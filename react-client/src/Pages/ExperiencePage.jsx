import React, { Component } from 'react';

import Experience from '../Components/Experience';

class ExperiencePage extends Component {
    render() {
        return (
            <div className='padded'>
                <h2 className='center my-primary'>
                    Some things I've done.
                </h2>
                <Experience />
            </div>
        )
    }
}

export default ExperiencePage;