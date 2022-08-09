import React from "react";
import FileCard from "../utils/FileCard";
import Login from "./Login";
import Signup from "./Signup";
import Verify from "./Verify";

const Test = (props) => {
    console.log(props);
  return (
    <div className="test-container h-screen p-12 flex flex-column items-center justify-center bg-red-100">
      <div className="card-container h-3/4 bg-blue-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
        {props.files.map((file) => (
            <FileCard
              icon="https://www.freeiconspng.com/uploads/blue-clothes-mario-transparent-party-png-0.png"
              name={file}
              className="card h-24 w-24"
            />
        ))}

        {/* <FileCard
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
        /> */}
      </div>
    </div>
    // <Verify/>
  );
};
export default Test;
