import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./FileCard.css";

const FileCard = (props) => {
  return (
    <div className="file-card flex flex-col align-center justify-center p-8 rounded-lg mx-12 bg-yellow-200 relative my-8 lg:my-0">
      <div className="dots absolute top-5 right-5 hover:text-blue-100 hover:cursor-pointer">
        <BsThreeDotsVertical size={30} />
      </div>
      <div className="file-card-icon">
        <img src={props.icon} alt="file-icon" className="w-[40%]" />
      </div>
      <div className="file-name">
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default FileCard;
