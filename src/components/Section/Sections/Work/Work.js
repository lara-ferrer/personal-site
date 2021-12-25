import React, { useState, useEffect } from 'react'
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap"
import SEO from "./SEO";
import Dev from "./Dev";
import "./Slider/slider.scss";

const works = [
    {
        contains: <SEO />,
        category: ["seo"]
    },
    {
        contains: <Dev />,
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
                    <Button className={"blow-btn"} href={"https://www.linkedin.com/in/laraferrer/"} target={"_blank"} rel={"nofollow noreferrer noopen"}>Ver más experiencia en LinkedIn</Button>
                </Col>
            </Row>
          </Container>
        </section>
        
    )
}