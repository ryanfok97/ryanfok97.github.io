import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Jumbotron, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bgimg from '../../../IMG_6925.jpg';

class Header extends Component {
    render() {
        return (
            <header>
                <Navbar expand='md' fixed='top' style={{backgroundColor: this.props.bg}} className='transition'>
                    <Navbar.Brand as={Link} to='/'>Ryan Fok</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <NavItem href='/'>
                                <Nav.Link as={Link} to={'/'}>About</Nav.Link>
                            </NavItem>
                            <NavItem href='/experience'>
                                <Nav.Link as={Link} to={'/experience'}>Experience</Nav.Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Jumbotron fluid
                           ref={this.props.jumbotronRef}
                           style={{height: '100vh', background: `url('${bgimg}') fixed`, backgroundSize: 'cover'}}>
                    <Container>
                        <h3>
                            What's up? I'm
                        </h3>
                        <h1>
                            R<span style={{fontSize: '.8em'}}>YAN</span> F<span style={{fontSize: '.8em'}}>OK</span>
                        </h1>
                    </Container>
                </Jumbotron>
            </header>
        )
    }
}

export default Header;