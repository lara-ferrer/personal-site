import React from 'react';
import "./social-card.scss"

const SocialCard = ({ pageContext: { title, description, height, width } }) => {
    return (
    <div className="o-social-card">
        <h1>{title}</h1>
    </div>
    );
}

export default SocialCard;