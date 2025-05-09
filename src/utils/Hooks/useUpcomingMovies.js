import { useDispatch } from "react-redux";
import { API_Options } from "../constants";
import { useEffect } from "react";
import { addupcomingMovies } from "../moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_Options
    );
    const json = await data.json();
    dispatch(addupcomingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
