import React from 'react';
import "./social-card.scss"
import logo from "../../images/logo.png";
import controls from "../../images/window_controls.png";

const SocialCard = ({ pageContext: { title } }) => {
    return (
    <div className="o-social-card">
        <div className="m-social-text">
            <h1 className="a-title">{title}</h1>
        </div>
        <img src={logo} className="a-image"/>
    </div>
    
    );
}

export default SocialCard;