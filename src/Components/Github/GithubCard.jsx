import React from "react";

const GithubCard = ({ imageUrl, username, profileUrl }) => {
  return (
    <div style={{ display: "flex", gap: "20px",border:"1px solid black" }}>
      <div>
        <img
          style={{ widows: "100px", height: "100px" }}
          src={imageUrl}
          alt=""
        />
      </div>
      <div>
        <h2>UserName: {username}</h2>
        <a href={profileUrl}>More About User</a>
      </div>
    </div>
  );
};

export default GithubCard;
