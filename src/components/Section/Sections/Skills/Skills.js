import React from 'react'
import Section from "../../Section"
import { Row, Col } from "react-bootstrap"
import { Card, Image, Icon } from "semantic-ui-react"
import windowControls from "../../../../images/window_controls.png"

export default function Skills() {
    return (
        <Section title="¿Cuáles son mis habilidades?" content={skills} />
    )
}

const skills = 
  <React.Fragment>
    <Row>

      <Col lg={6} xs={12}>
        <Card className="card-special">
          <div className="card-special__header">
            <div className="card-special__header__item"><Image src={windowControls} /></div>
            <div className="card-special__header__item"><h3>Lenguajes</h3></div>
          </div>
          <Card.Content>
            <Card.Description>
              <Row>
                <Col lg={6} xs={12}>
                  <p><Icon link name="check square" />JavaScript</p>
                </Col>
                <Col lg={6} xs={12}>
                  <p><Icon link name="check square" />Java</p>
                </Col>
              </Row>
              <Row>
                <Col lg={6} xs={12}>
                  <p><Icon link name="check square" />PHP</p>
                </Col>
                <Col lg={6} xs={12}>
                  <p><Icon link name="check square" />MySQL</p>
                </Col>
              </Row>
            </Card.Description>
          </Card.Content>
        </Card>
      </Col>

      <Col lg={6} xs={12}>
        <Card className="card-special">
          <div className="card-special__header">
            <div className="card-special__header__item"><Image src={windowControls} /></div>
            <div className="card-special__header__item"><h3>Frameworks</h3></div>
          </div>
          <Card.Content>
            <Card.Description>
              <Row>
                <Col lg={6} xs={12}>
                  <p><Icon link name="check square" />Node.js</p>
                </Col>
                <Col lg={6} xs={12}>
                  <p><Icon link name="check square" />Gatsby</p>
                </Col>
              </Row>
              <Row>
                <Col lg={6} xs={12}>
                  <p><Icon link name="check square" />React</p>
                </Col>
                <Col lg={6} xs={12}>
                  <p><Icon link name="check square" />Bootstrap</p>
                </Col>
              </Row>
            </Card.Description>
          </Card.Content>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={6} xs={12}>
        <Card className="card-special">
          <div className="card-special__header">
            <div className="card-special__header__item"><Image src={windowControls} /></div>
            <div className="card-special__header__item"><h3>Software</h3></div>
          </div>
          <Card.Content>
            <Card.Description>
              <Row>
                <Col lg={6} xs={12}>
                  <p><Icon link name="check square" />VSCode</p>
                </Col>
                <Col lg={6} xs={12}>
                  <p><Icon link name="check square" />IntellijIDEA</p>
                </Col>
              </Row>
              <Row>
                <Col lg={6} xs={12}>
                  <p><Icon link name="check square" />Netbeans</p>
                </Col>
                <Col lg={6} xs={12}>
                  <p><Icon link name="check square" />Oracle</p>
                </Col>
              </Row>
            </Card.Description>
          </Card.Content>
        </Card>
      </Col>

      <Col lg={6} xs={12}>
        <Card className="card-special">
          <div className="card-special__header">
            <div className="card-special__header__item"><Image src={windowControls} /></div>
            <div className="card-special__header__item"><h3>Herramientas</h3></div>
          </div>
          <Card.Content>
            <Card.Description>
              <Row>
                <Col lg={6} xs={12}>
                  <p><Icon link name="check square" />Github</p>
                </Col>
                <Col lg={6} xs={12}>
                  <p><Icon link name="check square" />Trello</p>
                </Col>
              </Row>
              <Row>
                <Col lg={6} xs={12}>
                  <p><Icon link name="check square" />Microsoft360</p>
                </Col>
                <Col lg={6} xs={12}>
                  <p><Icon link name="check square" />Notion</p>
                </Col>
              </Row>
            </Card.Description>
          </Card.Content>
        </Card>
      </Col>

    </Row>
  </React.Fragment>