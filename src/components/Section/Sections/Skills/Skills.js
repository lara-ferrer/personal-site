import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Icon } from "semantic-ui-react"
import "./Skills.scss"

const front = 
  <>
  	<div className="skills__card">
  		<h3 className="skills__card__title">Desarrollo front-end</h3>
  		<p><Icon link name="check square" /> Diseño y maquetación con HTML5, CSS3, SASS y JavaScript</p>
  		<p><Icon link name="check square" /> Desarrollo de aplicaciones web con React y Gatsby</p>
  		<p><Icon link name="check square" /> Uso de Headless CMS como Strapi y Sanity, empleando GraphQL para enviar los datos al front</p>
  		<p><Icon link name="check square" /> Uso de TypeScript</p>
  		<p><Icon link name="check square" /> Empleo de metodologías BEM, ITCSS y Atomic Design</p>
  		<p><Icon link name="check square" /> Desarrollo de páginas JSP con tecnología Java</p>
  	</div>
  </>

const back = 
  <>
  	<div className="skills__card">
  		<h3 className="skills__card__title">Desarrollo back-end</h3>
  		<p><Icon link name="check square" /> Desarrollo de apps con Java + Maven + JDBC + Servlets</p>
  		<p><Icon link name="check square" /> Testing en Java con JUnit</p>
  		<p><Icon link name="check square" /> Uso de Headless CMS: Strapi</p>
  		<p><Icon link name="check square" /> Gestión de BBDD con SQL + Oracle SQL Developer</p>
  	</div>
  </>

const software = 
  <>
  	<div className="skills__card">
  		<h3 className="skills__card__title">Software&amp;Tools</h3>
  		<p><Icon link name="check square" /> CI/CD en Java con Jenkins</p>
  		<p><Icon link name="check square" /> Evaluación de la calidad del código con SonarQube</p>
  		<p><Icon link name="check square" /> Virtualización de VM con VMWare</p>
  		<p><Icon link name="check square" /> Rastreo y análisis de sitios web con Screaming Frog</p>
  	</div>
  </>

const skills = [
	{
		contains: front,
		category: ["front"]
	},
	{
		contains: back,
		category: ["back"]
	},
	{
		contains: software,
		category: ["software"]
	}
]

export default function Skills() {
	const [filter, setFilter] = useState("front")
	const [projects, setProjects] = useState([])

	useEffect(() => {
		setProjects(skills)
	}, [])
	useEffect(() => {
		setProjects([])
		const filtered = skills.map(p => ({ ...p, filtered: p.category.includes(filter) }))
		setProjects(filtered)
	}, [filter])

	return (
		<section className="section skills">
			<Container className="skillgallery">
				<Row>
					<Col lg={5}>
						<h2 className="section__title">¿Cuáles son mis habilidades?</h2>
						<div className="gallery-controls">
							<span className="btn btn--primary" href="#" active={filter === "front"} onClick={() => setFilter("front")}>Front-end</span>
							<span className="btn btn--primary" href="#" active={filter === "back"} onClick={() => setFilter("back")}>Back-end</span>
							<span className="btn btn--primary" href="#" active={filter === "software"} onClick={() => setFilter("software")}>Software&amp;tools</span>
						</div>
					</Col>

					<Col lg={7}>	
						{projects.map(item =>
							item.filtered === true ? <span key={item.contains}>{item.contains}</span> : ""
						)}
					</Col>
				</Row>
			</Container>
		</section>
	)
}