import { useDispatch } from "react-redux";
import {  addTopRatedMovies, addUpCompingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { api_options } from "../utils/constants";

const useUpcomingMovies = ()=>{
const dispatch = useDispatch()
  const getUpcomingMovies = async () => {
   const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1'",
      api_options
    );

    const json = await data.json();
    dispatch(addUpCompingMovies(json.results))
    
  };
  useEffect(()=>{
    getUpcomingMovies()
  },[])
}

export default useUpcomingMovies;