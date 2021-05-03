/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}

const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions
  
    const posts = await graphql(`
        query {
            allStrapiArticulo(sort: { fields: createdAt, order: DESC }) {
                nodes {
                    Extracto
                    Titulo
                    createdAt
                    id
                    img_destacada {
                        publicURL
                    }
                    url
                    content {
                        heading
                        id_section
                        text
                    }
                }
            }
        } 
    `)

    paginate({
      createPage,
      items: posts.data.allStrapiArticulo.nodes,
      itemsPerPage: 6,
      pathPrefix: '/blog/',
      component: path.resolve(`src/templates/blog.js`),
    })

    posts.data.allStrapiArticulo.nodes.forEach((post) => {
        createPage({
            path: `/${post.url}`,
            component: path.resolve(`src/templates/post/post.js`),
            context: {
                data: post
            }
        }) 
    })
  }