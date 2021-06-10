import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap";
import "./MainTitle.scss"

export class MainTitle extends Component {
    render() {
        return (
            <Container className="title">
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <h1>{this.props.name}</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MainTitle;