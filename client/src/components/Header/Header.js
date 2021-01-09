import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
require('./header.css');

const onLogout = () => {
     localStorage.clear()
 }

const Header = (props) => {
     const userInfo = JSON.parse(localStorage.getItem('User'));
     const imageInfo = JSON.parse(localStorage.getItem('Image'));
     const canteenDetails = JSON.parse(localStorage.getItem('canteenDetails'));
     const details = canteenDetails.canteenDetails;
     const { name } = userInfo;      
     return (
          <div className = "header-container"  >
              <Navbar expand="sm ">
                    <Navbar.Brand className = "minimato-title" style={{color: "black", fontSize: "30px"}}>
                         MiniMato
                    </Navbar.Brand>
                  <Search {...props} details = {details} />
                  <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                         {
                              (imageInfo)?
                              <NavDropdown 
                                   title = {
                                        <img 
                                             src = {`${imageInfo.imageUrl}`} 
                                             style = {{
                                                  borderRadius: "50%", 
                                                  height: "50px",
                                                  width: "50px"
                                             }}
                                             alt = "profile"                                                   
                                        />}                                    
                              >
                                   <NavDropdown.Item as = {Link} to='/api/protected/dashboard'>
                                        Dashboard
                                   </NavDropdown.Item>
                                   <NavDropdown.Item as = {Link} to='/api/protected/viewprofile'>
                                        View Profile
                                   </NavDropdown.Item>
                                   <NavDropdown.Item>
                                        Order Summary
                                   </NavDropdown.Item>
                                   <NavDropdown.Item as = {Link} to='/' onClick = {onLogout}>
                                        Logout
                                   </NavDropdown.Item>
                              </NavDropdown> :
                              <NavDropdown title = {`Hi ${name}`} id="basic-nav-dropdownn">
                                   <NavDropdown.Item as = {Link} to='/api/protected/dashboard'>
                                        Dashboard
                                   </NavDropdown.Item>
                                   <NavDropdown.Item as = {Link} to='/api/protected/viewprofile'>
                                        View Profile
                                   </NavDropdown.Item>
                                   <NavDropdown.Item>
                                        Order Summary
                                   </NavDropdown.Item>
                                   <NavDropdown.Item as = {Link} to='/' onClick = {onLogout}>
                                        Logout
                                   </NavDropdown.Item>
                              </NavDropdown>
                         }                         
                    </Nav>
                  </Navbar.Collapse>
               </Navbar> 
               
          </div>
      );   
}
 
export default Header;