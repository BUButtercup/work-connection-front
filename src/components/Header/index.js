import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './style.css'

const Header = () => {



    return (

            <Navbar className ="col-12" expand="md" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="/">Logo Goes Here</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto d-flex align-items-center">
                            <NavLink exact className={({ isActive }) =>
                                    (isActive ? "clicked" : " Header-a")
                                }  to="/">Home</NavLink>
                            <NavLink className={({ isActive }) =>
                                    (isActive ? "clicked" : " Header-a")
                                }  to="/profile">Link</NavLink>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Header