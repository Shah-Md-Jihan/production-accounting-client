import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav className='me-3'>
                        <Link className='text-decoration-none text-dark' to="/">Home</Link>
                    </Nav>
                    <Nav className='me-3'>
                        <Link className='text-decoration-none text-dark' to="/about">About Us</Link>
                    </Nav>
                    <Nav className='me-3'>
                        <Link className='text-decoration-none text-dark' to="/login">Login</Link>
                    </Nav>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;