import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Jumbotron, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bgimg from '../../../assets/jumbotron.jpg';

class Header extends Component {
    render() {
        // TODO: figure out jumbotron for mobile
        return (
            <header>
                <Navbar expand='md' fixed='top' variant='dark' className={'transition ' + this.props.bg}>
                    <Navbar.Brand as={Link} to='/'>Ryan Fok</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <NavItem href='/'>
                                <Nav.Link as={Link} to={'/'}>About</Nav.Link>
                            </NavItem>
                            <NavItem href='/experience'>
                                <Nav.Link as={Link} to={'/experience'} className='links'>Experience</Nav.Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Jumbotron fluid
                           ref={this.props.jumbotronRef}
                           style={{height: '100vh', background: `url('${bgimg}') fixed`, backgroundSize: 'cover', marginBottom: '0'}}>
                    <Container>
                        <h3 className='header'>
                            Hi, I'm
                        </h3>
                        <h1 className='header'>
                            RYAN
                        </h1>
                    </Container>
                </Jumbotron>
            </header>
        )
    }
}

export default Header;