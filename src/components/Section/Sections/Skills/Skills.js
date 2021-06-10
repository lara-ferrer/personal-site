import React, { useState, useEffect } from 'react'
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap"
import { Card, Image, Icon } from "semantic-ui-react"
import windowControls from "../../../../images/window_controls.png"

const front = 
  <React.Fragment>
        <Card className="card-special">
          <div className="card-special__header">
            <div className="card-special__header__item item-1"><Image src={windowControls} /></div>
            <div className="card-special__header__item item-2 "><h3>Desarrollo front-end</h3></div>
          </div>
          <Card.Content>
            <Card.Description>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <p><Icon link name="check square" />Diseño y desarrollo con HTML + CSS + JavaScript</p>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                <p><Icon link name="check square" />Desarrollo de aplicaciones con React + Gatsby + GraphQL</p>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <p><Icon link name="check square" />Desarrollo de páginas web y e-commerce con Wordpress + Woocommerce</p>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <p><Icon link name="check square" />Desarrollo de páginas JSP con tecnología Java</p>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <p><Icon link name="check square" />Diseño y prototipado con Figma</p>
                </Col>
              </Row>
            </Card.Description>
          </Card.Content>
        </Card>
  </React.Fragment>

const back = 
    <React.Fragment>
      <Card className="card-special">
          <div className="card-special__header">
            <div className="card-special__header__item item-1"><Image src={windowControls} /></div>
            <div className="card-special__header__item item-2"><h3>Desarrollo back-end</h3></div>
          </div>
          <Card.Content>
            <Card.Description>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <p><Icon link name="check square" />Desarrollo de apps con Java + Maven + JDBC + Servlets</p>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <p><Icon link name="check square" />Testing en Java con JUnit</p>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <p><Icon link name="check square" />Uso de Headless CMS: Strapi</p>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <p><Icon link name="check square" />Gestión de BBDD con SQL + Oracle SQL Developer</p>
                </Col>
              </Row>
            </Card.Description>
          </Card.Content>
        </Card>
    </React.Fragment>

const software = 
    <React.Fragment>
      <Card className="card-special">
          <div className="card-special__header">
            <div className="card-special__header__item item-1"><Image src={windowControls} /></div>
            <div className="card-special__header__item item-2"><h3>Software&amp;Tools</h3></div>
          </div>
          <Card.Content>
            <Card.Description>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <p><Icon link name="check square" />CI/CD en Java con Jenkins</p>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <p><Icon link name="check square" />Evaluación de la calidad del código con SonarQube</p>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <p><Icon link name="check square" />Virtualización de VM con VMWare</p>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <p><Icon link name="check square" />Rastreo y análisis de sitios web con Screaming Frog</p>
                </Col>
              </Row>
            </Card.Description>
          </Card.Content>
        </Card>
    </React.Fragment>

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
  ];

export default function Skills() {
    const [filter, setFilter] = useState("front");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(skills);
    }, []);
    useEffect(() => {
        setProjects([]);
        const filtered = skills.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
    }, [filter]);

    return (
      <section>
        <Container className="skillgallery">
            <Row>
                <Col lg={5}>
                    <h2 className="text-gradient">¿Cuáles son mis habilidades?</h2>
                    <div className="gallery-controls">
                    <Button className="blow-btn" href="#" active={filter === "front"} onClick={() => setFilter("front")}>Front-end</Button>
                    <Button className="blow-btn" href="#" active={filter === "back"} onClick={() => setFilter("back")}>Back-end</Button>
                    <Button className="blow-btn" href="#" active={filter === "software"} onClick={() => setFilter("software")}>Software&amp;tools</Button>
                    </div>
                </Col>

                <Col lg={7}>
                    <div className="skills__container">
                        {projects.map(item =>
                        item.filtered === true ? <span key={item.contains}>{item.contains}</span> : ""
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    )
}