import { useDispatch } from "react-redux";
import { API_Options } from "../constants";
import { addTrailerVideo } from "../moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const moviesData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_Options
    );
    const json = await moviesData.json();
    const trailerData = json?.results.filter(
      (movie) => movie.type === "Trailer"
    );
    const movieTrailer = trailerData?.length ? trailerData[0] : json.results[0];
    dispatch(addTrailerVideo(movieTrailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
