import React from "react"
import { Icon } from "semantic-ui-react"
import "./SocialMedia.scss"

export default function SocialMedia() {
    return (
        <div className="social-media">
            <a href="https://twitter.com/lara__ferrer" target="_blank" rel="noopener noreferrer">
                <Icon link name="twitter" />
            </a>
            <a href="https://www.linkedin.com/in/laraferrer/" rel="noopener noreferrer" target="_blank">
                <Icon link name="linkedin" />
            </a>
            <a href="https://github.com/lara-ferrer" target="_blank" rel="noopener noreferrer">
                <Icon link name="github" />
            </a>
        </div>
    )
}
