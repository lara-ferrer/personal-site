import React, { useState, useEffect } from 'react'
import { Button, Carousel } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap"
import { Card, Image, Icon } from "semantic-ui-react"
import windowControls from "../../../../images/window_controls.png"
import { SEOdata } from "./SEOdata";
import { DEVdata } from "./DEVdata";
import BtnSlider from "./BtnSlider/BtnSlider"

const seo = 
  <React.Fragment>
    {SEOdata.map((item, i) => (
        <Card className="card-special">
          <div className="card-special__header">
            <div className="card-special__header__item item-1"><Image src={windowControls} /></div>
            <div className="card-special__header__item item-2"><h3>{item.title}</h3></div>
          </div>
          <Card.Content>
            <Card.Description>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <p><Icon link name="check square" />{item.tasks.firstTask}</p>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <p><Icon link name="check square" />{item.tasks.secondTask}</p>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <p><Icon link name="check square" />{item.tasks.thirdTask}</p>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <p><Icon link name="check square" />{item.tasks.fourthTask}</p>
                </Col>
              </Row>
            </Card.Description>
          </Card.Content>
        </Card>
    ))}
  </React.Fragment>

const dev = 
    <React.Fragment>
        {DEVdata.map((item, i) => (
            <Card className="card-special" key={i}>
              <div className="card-special__header">
                <div className="card-special__header__item item-1"><Image src={windowControls} /></div>
                <div className="card-special__header__item item-2"><h3>{item.title}</h3></div>
              </div>
              <Card.Content>
                <Card.Description>
                  <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <p><Icon link name="check square" />{item.tasks.firstTask}</p>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <p><Icon link name="check square" />{item.tasks.secondTask}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <p><Icon link name="check square" />{item.tasks.thirdTask}</p>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <p><Icon link name="check square" />{item.tasks.fourthTask}</p>
                    </Col>
                  </Row>
                </Card.Description>
              </Card.Content>
            </Card>
        ))}
    </React.Fragment>

const works = [
    {
        contains: seo,
        category: ["seo"]
    },
    {
        contains: dev,
        category: ["dev"]
    }
  ];

export default function Work() {
    const [filter, setFilter] = useState("dev");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(works);
    }, []);
    useEffect(() => {
        setProjects([]);
        const filtered = works.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
    }, [filter]);

    return (
        <section>
          <Container className="workgallery">
            <Row>
                <Col lg={5}>
                    <h2 className="text-gradient">¿Cuál es mi experiencia laboral?</h2>
                    <div className="gallery-controls">
                    <Button className="blow-btn" href="#" active={filter === "dev"} onClick={() => setFilter("dev")}>Desarrollo web</Button>
                    <Button className="blow-btn" href="#" active={filter === "seo"} onClick={() => setFilter("seo")}>Posicionamiento SEO</Button>
                    </div>
                </Col>

                <Col lg={7}>
                    <div className="works__container">
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