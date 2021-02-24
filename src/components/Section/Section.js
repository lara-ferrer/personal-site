import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./Section.scss"

export class Section extends Component {
  render() {
    return(
        <section>
            <Container>
                <Row>
                    <Col xs={12} md={5}>
                        <h2 className="text-gradient">{this.props.title}</h2>
                    </Col>
                    <Col xs={12} md={7}>
                        {this.props.content}
                    </Col>
                </Row>
            </Container>
        </section>
    )
  }
}

export default Section;