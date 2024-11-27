import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./services/movieApi";
import movieReducer from "./features/moviesSlice";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    movie: movieReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
