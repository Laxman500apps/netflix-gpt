import { useDispatch } from "react-redux";
import { API_Options } from "../constants";
import { useEffect } from "react";
import { addtopRatedMovies } from "../moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_Options
    );
    const json = await data.json();
    dispatch(addtopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
