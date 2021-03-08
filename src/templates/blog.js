import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout.js"
import PostsList from "../components/PostsList"
import Pagination from "../components/Pagination"
import Seo from "../components/Seo"
import "./blog.scss"

export default function Blog(props) {
  const { data, pageContext } = props
  const allPosts = data.all.nodes
  const seoPosts = data.seo.nodes
  const devPosts = data.dev.nodes

  return (
    <Layout>
      <Seo 
        title="Blog"
        description="Conoce más sobre desarrollo web, marketing y nuevas tecnologías."
      />
      <PostsList allPosts={allPosts} seoPosts={seoPosts} devPosts={devPosts} />
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
      filter: { Categoria: { in: ["SEO", "Desarrollo"] } }) {
        nodes {
          Contenido
          Extracto
          Titulo
          createdAt
          id
          img_destacada {
            publicURL
          }
          url
          Categoria
        }
    }

    seo: allStrapiArticulo(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
      filter: { Categoria: { in: "SEO" } }) {
        nodes {
          Contenido
          Extracto
          Titulo
          createdAt
          id
          img_destacada {
            publicURL
          }
          url
          Categoria
        }
    }

    dev: allStrapiArticulo(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
      filter: { Categoria: { in: "Desarrollo" } }) {
        nodes {
          Contenido
          Extracto
          Titulo
          createdAt
          id
          img_destacada {
            publicURL
          }
          url
          Categoria
        }
    }

  } 
`