import React from "react";
import { Movie_Img_URL } from "../../utils/constants";

const MoviesCard = ({ poster, title }) => {
  return (
    <div className="w-36">
      <img src={Movie_Img_URL + poster} alt={title} />
    </div>
  );
};

export default MoviesCard;
