import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='center'>
                    <FontAwesomeIcon 
                        icon={['fab', 'facebook']}
                        className='socials'
                        size='3x'
                        // style={{color: 'rgb(59, 89, 152)'}}
                        inverse
                    />
                    <FontAwesomeIcon 
                        icon={['fab', 'linkedin']}
                        className='socials'
                        size='3x'
                        // style={{color: 'rgb(0, 123, 182)'}}
                        inverse
                    />
                </div>
            </footer>
        )
    }
}

export default Footer;