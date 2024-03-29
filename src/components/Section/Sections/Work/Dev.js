import React from 'react'
import { DEVdata } from "./Data/DEVdata";
import { Container, Row, Col } from "react-bootstrap"
import { Card, Image, Icon } from "semantic-ui-react"
import windowControls from "../../../../images/window_controls.png"

export default function DEV() {
    return (
        <div>
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
                        <Row>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <p><Icon link name="check square" />{item.tasks.fifthTask}</p>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <p><Icon link name="check square" />{item.tasks.sixthTask}</p>
                            </Col>
                        </Row>
                    </Card.Description>
                </Card.Content>
                </Card>
            ))}
        </div>
    );
};