import React from 'react'
import "./Footer.scss"
import { Container, Row, Col } from "react-bootstrap"
import SocialMedia from "../SocialMedia"

export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <div class="credits">
                            <SocialMedia />
                            <p>&copy; 2020 Lara Ferrer</p>
                            <p>Made with React&amp;Gatsby</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}