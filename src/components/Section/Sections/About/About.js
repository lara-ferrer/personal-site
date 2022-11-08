import React from 'react'
import Section from "../../Section"
import { Button } from "react-bootstrap"

export default function About() {
    return (
        <Section title="¿Qué tienes que saber de mí?" content={about} />
    )    
}

const about = 
  <React.Fragment>
    <p className="center-mobile">Me llamo <strong>Lara</strong>, un alma inquieta nacida en <strong>Zaragoza</strong> hace <strong>28 años</strong>. Desde la adolescencia comencé a sentir curiosidad por la unión de la <strong>creatividad</strong> junto a la <strong>tecnología</strong> y empecé a dar mis primeros pasos en el mundo del diseño web.	<span role="img" aria-label="computer">&#128421;</span></p>
    <p className="center-mobile">Tras varios años estudiando diversas disciplinas he recuperado aquella pasión para convertirla a día de hoy en mi profesión. Actualmente trabajo como <strong>software engineer</strong>. Siempre con la misma ilusión que aquella niña que empezó a soñar con el código años atrás. <span role="img" aria-label="hands">&#128588;</span></p>
    <p className="center-mobile">Adoro <strong>aprender y formarme por mi cuenta</strong> en mis ratos libres. Soy <strong>curiosa</strong> por naturaleza y siempre intento sacar un aprendizaje valioso de cualquier experiencia. Cuando no estoy trabajando me gusta dedicarme <strong>a las redes sociales <span role="img" aria-label="mobile">&#128242;</span>, a la fotografía <span role="img" aria-label="camera">&#128248;</span>, al yoga</strong> <span role="img" aria-label="hands">&#128588;</span> o a otras actividades más variopintas como aprender más sobre el <strong>espacio</strong>. <span role="img" aria-label="starship">&#128640;</span></p>
    <Button className={"blow-btn"} href={"/CV-Lara-Ferrer.pdf"} target={"_blank"} rel={"nofollow noreferrer noopen"}>Descarga mi CV</Button>
  </React.Fragment>