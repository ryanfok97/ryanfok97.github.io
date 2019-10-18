import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
    render() {
        return (
            <footer>
                <h5 className='center footer'>I love meeting new people. Connect with me!</h5>
                <div className='center'>
                    <a href='https://www.facebook.com/ryanfok97'>
                        <FontAwesomeIcon
                            icon={['fab', 'facebook']}
                            className='socials'
                            size='3x'
                            inverse
                        />
                    </a>
                    <a href='https://www.linkedin.com/ryanfok'>
                        <FontAwesomeIcon 
                            icon={['fab', 'linkedin']}
                            className='socials'
                            size='3x'
                            inverse
                        />
                    </a>
                    <a href='https://www.github.com/ryanfok97'>
                        <FontAwesomeIcon
                            icon={['fab', 'github']}
                            className='socials'
                            size='3x'
                            inverse
                        />
                    </a>
                </div>
            </footer>
        )
    }
}

export default Footer;