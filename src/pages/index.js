import React from "react"
import Layout from "../layouts/Layout"
import Banner from "../components/Banner"
import About from "../components/Section/Sections/About/About"
import Skills from "../components/Section/Sections/Skills/Skills"
import Work from "../components/Section/Sections/Work/Work"
import Contact from "../components/Contact/Contact"
import Seo from "../components/Seo"

export default function Index(props) {
  const { data } = props

  return (
    <Layout>
      <Seo 
        title = "Inicio"
        description = "¡Hola! Soy Lara, desarrolladora web. Te animo a que visites mi página web para conocer más sobre mí :)"
      />
      <Banner />
      <About />
      <Skills />
      <Work />
      <Contact />
    </Layout>
  )
}