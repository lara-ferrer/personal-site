import React from "react"
import "./Contact.scss"
import { Container, Row, Col, Button, Image } from "react-bootstrap"
import hablamos from "../../images/hablamos.png"

export default function Contact() {
	return (
		<section className="contact-background" id="contacto">
			<Container>
				<Row>
					<Col lg={12} className="contact">
						<h2 className="text-gradient">Let's connect</h2>
						<p>Si quieres que forme parte de tu proyecto y deseas apostar por mi trabajo y experiencia, te invito a que me escribas un mensaje para que podamos comenzar a hablar. <span role="img" aria-label="message">&#128233;</span></p>
						<Button href="mailto:laraferrercs@gmail.com">¡Vamos allá!</Button>
						<Image src={hablamos} />
					</Col>
				</Row>
			</Container>
		</section>
	)
}