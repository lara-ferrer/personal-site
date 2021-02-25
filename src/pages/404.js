import React from "react"
import Layout from "../layouts/Layout"
import Seo from "../components/Seo"

export default function Index() {
  return (
    <Layout>
      <Seo 
        title = "Error 404"
        description = "Error 404. Por favor vuelve al inicio."
      />
      <h1>Error 404</h1>
      <p>La página que estabas buscando no existe. Por favor vuelve al <a href="/">inicio</a> y realiza una nueva consulta.</p>
    </Layout>
  )
}