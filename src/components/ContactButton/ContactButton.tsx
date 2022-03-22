import React from "react"
import "./ContactButton.scss"
import { Icon } from "semantic-ui-react"

const ContactButton = () => {
	return (
		<a href="mailto:laraferrercs@gmail.com" className="contact-button"><Icon name="mail" /></a>
	)
}

export default ContactButton