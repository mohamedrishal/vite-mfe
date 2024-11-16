import React from "react";

const UserDetails = ({ colorText }) => {
  return (
    <div style={{ border: "1px solid pink" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingInline: "7rem",
        //   height: "88.8vh",
          color: `${colorText}`,
        }}
      >
        User2 app..
      </h1>
    </div>
  );
};

export default UserDetails;
