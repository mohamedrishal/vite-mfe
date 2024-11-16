import React from "react";

const UserDetails = ({ colorText }) => {
  return (
    <div style={{ border: "1px solid gray" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingInline: "7rem",
        //   height: "88vh",
          color: `${colorText}`,
        }}
      >
        User app..
      </h1>
    </div>
  );
};

export default UserDetails;
