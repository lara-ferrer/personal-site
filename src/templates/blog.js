import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layouts/Layout.js"
import PostsList from "../components/PostsList"
import Pagination from "../components/Pagination"
import MainTitle from "../components/MainTitle"
import Seo from "../components/Seo"
import "./blog.scss"

export default function Blog(props) {
  const { data, pageContext } = props
  const allPosts = data.all.nodes
  const seoPosts = data.seo.nodes
  const devPosts = data.dev.nodes
  const perfPosts = data.perf.nodes

  return (
    <Layout>
      <Seo 
        title="Blog"
        description="Conoce más sobre desarrollo web, marketing y nuevas tecnologías."
      />
        <Container className="blog-title">
          <Row>
            <Col xs={12} md={12} lg={12}>
              <MainTitle name="Blog" />
              <p>Descubre todo sobre desarrollo web, performance, UX, SEO y mucho más &#x2728;</p>
            </Col>
          </Row>
        </Container>
      <PostsList allPosts={allPosts} seoPosts={seoPosts} devPosts={devPosts} perfPosts={perfPosts}/>
      <div className="pagination"><Pagination pageContext={pageContext}/></div>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    all: allStrapiArticulo(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
      filter: { Categoria: { in: ["SEO", "Desarrollo", "Performance"] } }) {
        nodes {
          Extracto
          Titulo
          createdAt
          id
          img_destacada {
            url
          }
          url
          Categoria
          content
        }
    }

    seo: allStrapiArticulo(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
      filter: { Categoria: { in: "SEO" } }) {
        nodes {
          Extracto
          Titulo
          createdAt
          id
          img_destacada {
            url
          }
          url
          Categoria
          content
        }
    }

    dev: allStrapiArticulo(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
      filter: { Categoria: { in: "Desarrollo" } }) {
        nodes {
          Extracto
          Titulo
          createdAt
          id
          img_destacada {
            url
          }
          url
          Categoria
          content
        }
    }

    perf: allStrapiArticulo(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
      filter: { Categoria: { in: "Performance" } }) {
        nodes {
          Extracto
          Titulo
          createdAt
          id
          img_destacada {
            url
          }
          url
          Categoria
          content
        }
    }

  } 
`