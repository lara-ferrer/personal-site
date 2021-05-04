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
  const perfPosts = data.perf.nodes

  return (
    <Layout>
      <Seo 
        title="Blog"
        description="Conoce más sobre desarrollo web, marketing y nuevas tecnologías."
      />
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
      filter: { Categoria: { in: ["SEO", "Desarrollo"] } }) {
        nodes {
          Extracto
          Titulo
          createdAt
          id
          img_destacada {
            publicURL
          }
          url
          Categoria
          content {
            heading
            id_section
            text
          }
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
            publicURL
          }
          url
          Categoria
          content {
            heading
            id_section
            text
          }
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
            publicURL
          }
          url
          Categoria
          content {
            heading
            id_section
            text
          }
        }
    }

    perf: allStrapiArticulo(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
      filter: { Categoria: { in: "Performance web" } }) {
        nodes {
          Extracto
          Titulo
          createdAt
          id
          img_destacada {
            publicURL
          }
          url
          Categoria
          content {
            heading
            id_section
            text
          }
        }
    }

  } 
`