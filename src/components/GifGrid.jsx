import React, { useEffect, useState } from "react";
import GridItem from "./GridItem";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  // Hook personalizado
  const { images, isLoading } = useFetchGifs(category);
  // console.log({ isLoading });
  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando ...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
