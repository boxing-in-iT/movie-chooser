import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Genre, Movie } from "../../data/interfaces";

interface MoviesState {
  favorites: Movie[];
  randomMovie: Movie | null;
  choosenGenres: Genre[];
}

const initialState: MoviesState = {
  favorites: [],
  randomMovie: null,
  choosenGenres: [],
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
    toggleGenre: (state, action: PayloadAction<Genre>) => {
      const isExisting = state.choosenGenres.some(
        (genre) => genre.id === action.payload.id
      );

      if (isExisting) {
        state.choosenGenres = state.choosenGenres.filter(
          (genre) => genre.id !== action.payload.id
        );
      } else {
        state.choosenGenres.push(action.payload);
      }
    },
  },
});

export const { toggleFavorites, setRandomMovie, toggleGenre } =
  moviesSlice.actions;
export default moviesSlice.reducer;
