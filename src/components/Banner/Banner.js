import React from 'react'
import "./Banner.scss"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook"

const work_title = [
    "desarrolladora web.",
    "consultora SEO.",
  ];

let index = 0;
  
export default function Banner(props) {
    const { images } = props;
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
                    <Col xs={12} md={6}>
                      <div className="banner-info"> 
                        <p>¡Hola! Soy Lara,</p>
                        <h1>{name}</h1>
                      </div>
                    </Col>
                    <Col xs={12} md={6} className="profile">
                      <Img fixed={images.childImageSharp.fixed} width={images.childImageSharp.fixed.width} width={images.childImageSharp.fixed.width}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}