import React from "react"
import Layout from "../layouts/Layout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import Contact from "../components/Contact/Contact"
import Seo from "../components/Seo"
import ContactButton from "../components/ContactButton/ContactButton"

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