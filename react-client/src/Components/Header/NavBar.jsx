import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
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
            </header>
        )
    }
}

export default NavBar;