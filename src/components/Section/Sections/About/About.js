import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const About = () => {
	return (
		<Container>
			<Row>
				<Col xs={12} md={5}>
					<h2 className="section__title">¿Qué tienes que saber de mí?</h2>
				</Col>
				<Col xs={12} md={7}>
					{content}
				</Col>
			</Row>
		</Container>
	)    
}

const content = 
  <div className="section__about">
  	<p>Me llamo <strong>Lara</strong>, un alma inquieta nacida en <strong>Zaragoza</strong> hace <strong>27 años</strong>. Desde la adolescencia comencé a sentir curiosidad por la unión de la <strong>creatividad</strong> junto a la <strong>tecnología</strong> y empecé a dar mis primeros pasos en el mundo del diseño web.	<span role="img" aria-label="computer">&#128421;</span></p>
  	<p>Tras varios años estudiando diversas disciplinas he recuperado aquella pasión para convertirla a día de hoy en mi profesión. Actualmente trabajo como <strong>consultora SEO</strong>, además de estar dando mis primeros pasos en el mundo del <strong>desarrollo</strong>. Siempre con la misma ilusión que aquella niña que empezó a soñar con el código años atrás. <span role="img" aria-label="hands">&#128588;</span></p>
  	<p>Adoro <strong>aprender y formarme por mi cuenta</strong> en mis ratos libres. Soy <strong>curiosa</strong> por naturaleza y siempre intento sacar un aprendizaje valioso de cualquier experiencia. Cuando no estoy trabajando me gusta dedicarme <strong>a las redes sociales <span role="img" aria-label="mobile">&#128242;</span>, a la fotografía <span role="img" aria-label="camera">&#128248;</span>, al yoga</strong> <span role="img" aria-label="hands">&#128588;</span> o a otras actividades más variopintas como aprender más sobre el <strong>espacio</strong>. <span role="img" aria-label="starship">&#128640;</span></p>
  	<a className="btn btn--primary" href={"/CV-Lara-Ferrer.pdf"} target={"_blank"} rel={"nofollow noreferrer noopen"}>Descarga mi CV</a>
  </div>

export default About