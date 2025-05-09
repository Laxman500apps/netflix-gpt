import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-white py-3">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide">
        <div className="gap-3 flex">
          {movies?.map((movie) => (
            <MoviesCard
              key={movie.id}
              poster={movie.poster_path}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
