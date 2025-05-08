import { useDispatch } from "react-redux";
import { API_Options } from "../constants";
import { useEffect } from "react";
import { addNowPlaying } from "../moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_Options
    );
    const json = await data.json();
    dispatch(addNowPlaying(json.results));
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
