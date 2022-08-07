import React from "react";
import "./FeatureCard.css";

const FeatureCard = (props) => {
  return (
    <div className="feature-card">
      <div className="feature-card-icon">
        <img src={props.icon} alt="icon" className="icon" />
      </div>
      <div className="feature-card-text">
        <h1>Feature Name</h1>
        <h3>This is the description</h3>
      </div>
    </div>
  );
};
export default FeatureCard;
