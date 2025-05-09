import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addpopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addupcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addtopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const {
  addNowPlaying,
  addpopularMovies,
  addupcomingMovies,
  addtopRatedMovies,
  addTrailerVideo,
} = moviesSlice.actions;
export default moviesSlice.reducer;
