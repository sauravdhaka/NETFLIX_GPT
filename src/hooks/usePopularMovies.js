import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopulargMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { api_options } from "../utils/constants";

const usePopularMovies = ()=>{
const dispatch = useDispatch()
  const getPopularMovies = async () => {
   const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1'",
      api_options
    );

    const json = await data.json();
    dispatch(addPopulargMovies(json.results))
    
  };
  useEffect(()=>{
    getPopularMovies()
  },[])
}

export default usePopularMovies;