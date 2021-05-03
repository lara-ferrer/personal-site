import React from 'react'
import { Icon } from "semantic-ui-react"
import "./ShareSocial.scss"
export default function ShareSocial(props) {
    const { post } = props;

    return (
        <div className="share-social">
            <p>Compartir en:&nbsp;</p>
            <a href={`https://twitter.com/intent/tweet?url=https://www.laraferrer.es/${post.url}&text=${post.Titulo}`} target="_blank" rel="noopener noreferrer">
                <Icon link name="twitter" />
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=laraferrer.es/${post.url}`} target="_blank" rel="noopener noreferrer">
                <Icon link name="facebook" />
            </a>
            {/* <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.laraferrer.es/${post.url}`}><Icon link name="linkedin" /></a> */}
        </div>
    )
}
