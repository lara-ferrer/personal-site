import React from "react"
import Layout from "../../layouts/Layout"
import Seo from "../../components/Seo"
import { Container, Row, Col } from "react-bootstrap"
import ShareSocial from "../../components/ShareSocial"
import "./post.scss"

export default function post(props) {
    console.log(props);
    const { pageContext } = props;
    const { data: post } = pageContext;
    return (
        <Layout>
            <Seo 
                title={post.Titulo}
                description={post.Extracto}
                image={post.img_destacada.publicURL}
            />
            <Container className="post">
                <Row>
                    <Col lg={12}>
                    <h1>{post.Titulo}</h1>
                    <hr />
                    <div className="markdown-body">
                        <div dangerouslySetInnerHTML={{ __html: post.Contenido}} />
                    </div>
                    <hr />
                    <ShareSocial post={post} />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
