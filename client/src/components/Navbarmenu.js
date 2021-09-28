import React from 'react';
import { Nav,Navbar } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import img from './images/logo.png'

const Navbarmenu = () => {
    return (
        <div className="container-fluid main-nav">
            <Navbar className="container" expand="lg">
                
                    <Navbar.Brand href="#home"><img className="logo" src={img}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="show-product-nav" to="/">Product</NavLink>
                            <NavLink className="add-product-nav" to="/addProduct">AddProduct</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                
            </Navbar>
        </div>
    );
};

export default Navbarmenu;