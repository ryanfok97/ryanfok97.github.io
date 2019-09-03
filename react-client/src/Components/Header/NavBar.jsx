import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {

    }

    render() {


        return (
            <Navbar expand='md' fixed='top'>
                <Navbar.Brand href='#home'>Ryan Fok</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link href='#home'>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;