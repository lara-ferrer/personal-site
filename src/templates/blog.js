import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout.js"
import PostsList from "../components/PostsList"
import Pagination from "../components/Pagination"
import Seo from "../components/Seo"
import "./blog.scss"

export default function Blog(props) {
  const { data, pageContext } = props
  const posts = data.allStrapiArticulo.nodes

  return (
    <Layout>
      <Seo 
        title="Blog"
        description="Conoce más sobre desarrollo web, marketing y nuevas tecnologías."
      />
      <PostsList posts={posts}/>
      <div className="pagination"><Pagination pageContext={pageContext}/></div>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allStrapiArticulo(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }) {
      nodes {
                Contenido
                Extracto
                Titulo
                createdAt
                id
                url
                img_destacada {
                    publicURL
                }
            }
        }
    } 
`