import React from "react"
import { Link } from "gatsby"
import { Image } from "react-bootstrap"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import logoMenu from "../../images/logo.png"
import SocialMedia from "../SocialMedia"
import "./Menu.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links";
  
export default function SecondMenu() {
    return (
        <div>
           <Navbar className="menu" expand="lg" sticky="top" variant="dark">
                <Navbar.Brand href="/">
                    <Image src={logoMenu} className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Link to="/" className="nav-link menu-link">Inicio</Link>
                    <Link to="/blog" className="nav-link menu-link">Blog</Link>
                    <AnchorLink to="/#contacto" className="nav-link menu-link"><span>Contacto</span></AnchorLink>
                    <SocialMedia />
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </div>
    )
}
