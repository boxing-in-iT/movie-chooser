import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../data/interfaces";

interface MoviesState {
  favorites: Movie[];
  randomMovie: Movie | null;
}

const initialState: MoviesState = {
  favorites: [],
  randomMovie: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    toggleFavorites: (state, action: PayloadAction<Movie>) => {
      const isExisting = state.favorites.some(
        (movie) => movie.id === action.payload.id
      );

      if (isExisting) {
        state.favorites = state.favorites.filter(
          (movie) => movie.id !== action.payload.id
        );
      } else {
        state.favorites.push(action.payload);
      }
    },
    setRandomMovie: (state, action: PayloadAction<Movie | null>) => {
      state.randomMovie = action.payload;
    },
  },
});

export const { toggleFavorites, setRandomMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
