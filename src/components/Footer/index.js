import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './style.css'

const Footer = () => {
    return (
            <Navbar className="col-12 flex-column" fixed="bottom">
                <div className="col-9 d-flex justify-content-around">
                <Nav className="flex-column  align-items-center foot-bar">
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav>
                <Nav className="flex-column align-items-center foot-bar">
                    <p className="foot-txt">Icons by Flaticon</p>
                    <Nav.Link href="https://www.flaticon.com/free-icons/germany" title="germany icons">German</Nav.Link>
                    <Nav.Link href="https://www.flaticon.com/free-icons/ukraine" title="ukraine icons">Ukrainian</Nav.Link>
                    <Nav.Link href="https://www.flaticon.com/free-icons/uk" title="uk icons">UK</Nav.Link>
   
                </Nav>
                </div>
                {/* <nav>
                    <h1>Footer</h1>
                    <a>Link</a>
                    <a>Link</a>
                    <a>Link</a>
                    <a href="" "></a>
  

                </nav> */}
            </Navbar>
    )
}

export default Footer