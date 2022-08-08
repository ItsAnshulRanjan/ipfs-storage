import React from "react";
import encryptionLoading from "../assets/encryptionLoading.gif";
import "./EncryptionLoading.css";


const EncryptionLoading = () => {
  return (
    <div className="encryption-loading-container">
      <img src={encryptionLoading} alt="Encryption loading" className="encryption-loading"  />
    </div>
  );
};
export default EncryptionLoading;
