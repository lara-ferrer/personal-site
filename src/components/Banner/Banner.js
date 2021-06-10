import React from 'react'
import "./Banner.scss"
import { Container, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook"

const work_title = [
    "desarrolladora web.",
    "especialista en WPO.",
  ];

let index = 0;
  
export default function Banner() {
    const [workTitle, setWorkTitle] = useState("desarrolladora web.");
    const intervalRef = useRef({});
    const name = useTypewriter(workTitle);
    useEffect(
      () => {
        intervalRef.current = setInterval(() => {
          index = index > 2 ? 0 : ++index;
          setWorkTitle(work_title[index]);
        }, 5000);
        return function clear() {
          clearInterval(intervalRef.current);
        };
      },
      [workTitle]
    );

    return (
        <div className="banner">
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                      <div className="banner-info"> 
                        <p>¡Hola! Soy Lara,</p>
                        <h1>{name}</h1>
                      </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} className="profile">
                    <StaticImage src="../../images/profile.png" alt="A dinosaur" placeholder="blurred" layout="constrained"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}