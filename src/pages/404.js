import React from "react"
import Layout from "../layouts/Layout"
import Seo from "../components/Seo"
import MainTitle from "../components/MainTitle"
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Index() {
  return (
    <Layout>
      <Seo 
        title = "Error 404"
        description = "Error 404. Por favor vuelve al inicio."
      />

      <Container className="page404">
          <Row>
            <Col xs={12} md={12} lg={12}>
              <MainTitle name="Error 404" />
            </Col>
          </Row>
          <Row className="content center">
            <Col xs={12} md={12} lg={12}>
            <p >La página que estabas buscando no existe. Por favor vuelve al inicio y realiza una nueva consulta.</p>
            <Button href="/">Volver al inicio</Button>
            </Col>
          </Row>  
        </Container>
    </Layout>
  )
}