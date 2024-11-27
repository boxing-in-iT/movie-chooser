import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Genre } from "../../data/interfaces";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZiYjc4ZTI2ZWU5NGVhYjY5Yzk5YjZmZDI4ZWY1MSIsIm5iZiI6MTczMjU2NDU2NS4yOTY5OTY0LCJzdWIiOiI2NzQ0ZDU4MjQ2MjYwZTE0ZmJlYjRmNmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UJf2NDOoqkGHnb0wpwgnfRdcL--hpl6kAy0EN1sgjJw"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRandomMovie: builder.query({
      query: ({ genres }: { genres?: Genre[] }) => {
        const randomPage = Math.floor(Math.random() * 100) + 1; // Случайная страница
        console.log("randomPage", randomPage);
        const genreQuery =
          Array.isArray(genres) && genres.length > 0
            ? `&with_genres=${genres.map((genre) => genre.id).join(",")}`
            : "";
        return `discover/movie?include_adult=true&include_video=false&vote_average.gte=7&vote_count.gte=500&language=ru-US&page=${randomPage}&sort_by=popularity.desc${genreQuery}`;
      },
    }),

    getMovieTrailersById: builder.query({
      query: (ids) => `movie/${ids}/videos?language=ru-US`,
    }),
    getCastMovieById: builder.query({
      query: (ids) => `movie/${ids}/credits?language=ru-US`,
    }),
  }),
});

export const {
  useGetRandomMovieQuery,
  useLazyGetRandomMovieQuery,
  useGetMovieTrailersByIdQuery,
  useLazyGetMovieTrailersByIdQuery,
  useGetCastMovieByIdQuery,
} = movieApi;
