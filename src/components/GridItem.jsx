import React from "react";

const GridItem = ({ title, url, id }) => {
  return (
    <>
      <div className="card" key={id}>
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    </>
  );
};

export default GridItem;
