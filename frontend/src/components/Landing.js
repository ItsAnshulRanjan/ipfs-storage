import React from "react";
import cloudGif from "../assets/cloud.gif";
import "./Landing.css";
import FeatureCard from "../utils/FeatureCard";
import  secureInternet  from "../assets/secureInternet.png";
import dataEncryption from "../assets/encrypt.png";
import reliable from "../assets/reliable.png";
import node from "../assets/node.png";

const Landing = () => {
  const imageArray = [
    {
      icon: secureInternet,
      title: "Secure Internet",
      description: "We provide secure internet for your business",
      link: "https://www.google.com/",
    },
    {
      icon: dataEncryption,
      title: "Data Encryption",
      description: "We provide secure internet for your business",
      link: "https://www.google.com/",
    },

    {
      icon: node,
      title: "Multiple Nodes",
      description: "We provide secure internet for your business",
      link: "https://www.google.com/",
    },

    {
      icon: reliable,
      title: "Reliable",
      description: "We provide secure internet for your business",
      link: "https://www.google.com/",
    },
  ];
  return (
    <>
      <div className="gif-container">
        <img src={cloudGif} alt="cloud" className="cloud" />
      </div>
      <div className="feature-container">
        {imageArray.map((image) => (
            <FeatureCard
                icon={image.icon}
                title={image.title}
                description={image.description}
                link={image.link}
            />
        ))}
      </div>
    </>
  );
};
export default Landing;
