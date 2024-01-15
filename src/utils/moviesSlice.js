import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        popularMovies : null,
        topRatedMovies : null,
        upComingMovies : null,
    },
    reducers : {
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo : (state,action)=>{
            state.trailerVideo = action.payload
        },
        addPopulargMovies : (state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies : (state,action)=>{
            state.topRatedMovies = action.payload
        },
        addUpCompingMovies : (state,action)=>{
            state.upComingMovies = action.payload
        },
    }
})

export const {addNowPlayingMovies , addTrailerVideo ,addPopulargMovies , addTopRatedMovies , addUpCompingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;