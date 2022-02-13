import React from "react"
import "./Footer.scss"
import { Container, Row, Col } from "react-bootstrap"
import SocialMedia from "../SocialMedia"

export default function Footer() {
	return (
		<footer className="footer navbar-fixed-bottom">
			<Container>
				<Row>
					<Col>
						<div className="credits">
							<SocialMedia />
							<p>&copy; 2020 Lara Ferrer</p>
							<p>Made with Gatsby&amp;Strapi</p>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}