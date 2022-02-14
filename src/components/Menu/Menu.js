import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Image } from "react-bootstrap"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import logoMenu from "../../images/logo.png"
import SocialMedia from "../SocialMedia"
import "./Menu.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links"
  
export default function SecondMenu() {
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
		  window.addEventListener("scroll", () =>
		  	setScroll(window.pageYOffset > 300)
		  );
		}
	  }, []);

	return (
		<Navbar className={`menu${scroll ? ' menu--small' : ' menu--large'}`} expand="lg" sticky="top" variant="dark" id="top">
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
       
	)
}
