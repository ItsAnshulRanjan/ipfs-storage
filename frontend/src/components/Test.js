import React from "react";
import FileCard from "../utils/FileCard";

const Test = () => {
  return (
    <div className="card-container bg-blue-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto mt-48">
      <FileCard
        icon="https://www.freeiconspng.com/uploads/blue-clothes-mario-transparent-party-png-0.png"
        name="file-icon.png"
      />
      <FileCard
        icon="https://www.freeiconspng.com/uploads/blue-clothes-mario-transparent-party-png-0.png"
        name="file-icon.png"
      />
      <FileCard
        icon="https://www.freeiconspng.com/uploads/blue-clothes-mario-transparent-party-png-0.png"
        name="file-icon.png"
      />
      <FileCard
        icon="https://www.freeiconspng.com/uploads/blue-clothes-mario-transparent-party-png-0.png"
        name="file-icon.png"
      />
    </div>
  );
};
export default Test;
