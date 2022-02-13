import React from "react"
import "./Hero.scss"
import { Container, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
	return (
		<section className="hero">
			<Container>
				<Row>
					<Col sm={12} md={6} lg={6} className="d-flex">
						<div className="hero__info"> 
							<p>¡Hola! Soy Lara,</p>
							<h1 className="hero__title">software engineer especializada en front-end y WPO</h1>
						</div>
					</Col>
					<Col sm={12} md={6} lg={6} className="hero__image">
						<StaticImage src="../../images/profile.png" alt="Lara Ferrer" placeholder="blurred" layout="constrained"/>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Hero