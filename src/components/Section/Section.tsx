import React, { FC } from "react"
import "./Section.scss"
import About from "./Sections/About"
import Skills from "./Sections/Skills"
import Work from "./Sections/Work"

export type SectionProps = {
	type: string
}

const Section: React.FC<SectionProps> = (type) => {
	const sectionBuilder = (sectionType) => {
		const existingTypes = {
			about: <About />,
			skills: <Skills />,
			work: <Work />,
        }

		if (sectionType.type in existingTypes) {
			const builder = existingTypes[sectionType.type]
			return builder
		}
	}

	return (
		<section className="section">
			{sectionBuilder(type)}
		</section>
	)
	
}

export default Section