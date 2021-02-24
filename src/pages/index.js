import React from "react"
import Layout from "../layouts/Layout"
import Banner from "../components/Banner"
import About from "../components/Section/Sections/About/About"
import Skills from "../components/Section/Sections/Skills/Skills"
import WorkGallery from "../components/Section/Sections/Work/WorkGallery"
import Contact from "../components/Contact/Contact"
import Seo from "../components/Seo"

export default function Index() {
  return (
    <Layout>
      <Seo 
        title = "Inicio"
        description = "¡Hola! Soy Lara, desarrolladora web y consultora SEO. Te animo a que visites mi página web para conocer más sobre mí :)"
      />
      <Banner />
      <About />
      <Skills />
      <WorkGallery />
      <Contact />
    </Layout>
  )
}