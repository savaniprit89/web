import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movies: []

}
//initial state 

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
      setMovies: (state, action) => {
        state.movies = action.payload;
      }
    }
  });

  export const { setMovies } = movieSlice.actions;
  export const selectMovies = (state) => state.movie.movies;
  //action---send movie,delete movie,login,logout ,sign
  //reducers-takes action and change the state

  export default movieSlice.reducer;