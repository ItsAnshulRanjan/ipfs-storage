import React from "react";
import emailGIF from "../assets/email.gif";

const Verify = () => {
  return (
    <div className="email-loading-container flex justify-center flex-column items-center bg-[#90CAf9] h-screen  p-4 md:p-12">
      <img
        src={emailGIF}
        alt="Email loading"
        className="email-loading w-3/4 md:w-1/2"
      />
      <h1 className="text-center text-white text-xl lg:text-4xl">
        We have sent you an email with a link to verify your account.
      </h1>
    </div>
  );
};

export default Verify;
