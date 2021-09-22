import React from "react"
import Layout from "../../layouts/Layout"
import Seo from "../../components/Seo"
import { Container, Row, Col, Button, Image } from "react-bootstrap"
import ShareSocial from "../../components/ShareSocial"
import Scrollspy from 'react-scrollspy'
import { map } from "lodash"
import scrollTo from 'gatsby-plugin-smoothscroll';

import "./post.scss"

export default function post(props) {
    
    const { pageContext } = props;
    const { data: post } = pageContext;
    const { content } = post;
    
    const mapIdSection = content.map(content => content.id_section);
    
    return (
        <Layout>
            <Seo 
                title={post.Titulo}
                description={post.Extracto}
                image={post.img_destacada.url}
            />
            
            <Container className="post">
                <Row>
                    <Col lg={12}>
                        <Row>
                            <Col lg={6}>
                                <h1 className="text-gradient">{post.Titulo}</h1>
                                <p>{post.Extracto}</p>
                                <ShareSocial post={post} />
                            </Col>
                            <Col lg={6}>
                                <Image src={post.img_destacada.url} />
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col lg={3}>
                                <aside className="sticky">
                                        <Scrollspy items={mapIdSection} currentClassName="is-current">
                                        {map(content, content  => (
                                            <li><a href={`#${content.id_section}`}>{content.heading}</a></li>
                                            ))}
                                        </Scrollspy>
                                        <Button className="top button-blog" onClick={() => scrollTo('#top')}>Volver arriba</Button>
                                </aside>
                            </Col>

                            <Col lg={9}>  
                                {map(content, content  => (
                                    <div className="markdown-body">
                                        <div id={content.id_section} className="section-post"> 
                                            <h2>{content.heading}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: content.text}} />
                                        </div>
                                    </div>
                                ))}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )

}