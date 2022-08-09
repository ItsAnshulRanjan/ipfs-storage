import React from "react";
import cloudGif from "../assets/cloud.gif";
import "./Landing.css";
import FeatureCard from "../utils/FeatureCard";
import secureInternet from "../assets/secureInternet.png";
import dataEncryption from "../assets/encrypt.png";
import reliable from "../assets/reliable.png";
import node from "../assets/node.png";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Landing = () => {
  const navigate = useNavigate();
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
      <div className="landing-container">
        <div className="landing-content xl:flex xl:justify-end">
          <div className="landing-content-title flex items-center flex-col justify-center">
            <h1 className=" text-3xl mt-12 md:text-6xl font-normal leading-normal mb-12">
              Cloud Storage
            </h1>
            <h3 className="text-center p-12">
              We provide secure internet for your business
            </h3>
            <div className="d-grid gap-2 w-1/3">
              <Button
                className="mt"
                variant="outline-dark"
                size="lg"
                block
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="landing-content-features flex align-center justify-end">
            <img src={cloudGif} alt="cloud" className="cloud w-full" />
          </div>
        </div>

        <div className="feature-container">
          {imageArray.map((image) => (
            <FeatureCard
              key={image.title}
              icon={image.icon}
              title={image.title}
              description={image.description}
              link={image.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Landing;
