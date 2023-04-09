import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from '../styles/main.css';

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header style={styles}>
      <Navbar collapseOnSelect expand='lg'>
        <Container>
        <Navbar.Brand><h1>Claire Lee</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="me-auto" id="navLinks">
              <Nav.Link href='#about'
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                About
              </Nav.Link>
              <Nav.Link href='#portfolio'
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                Portfolio
              </Nav.Link>
              <Nav.Link href='#contact'
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                Contact
              </Nav.Link>
              <Nav.Link href='#resume'
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header >
  );
}