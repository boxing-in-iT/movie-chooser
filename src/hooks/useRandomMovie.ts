import { useState } from "react";
import { Movie } from "../data/interfaces";
import { useLazyGetRandomMovieQuery } from "../redux/services/movieApi";

export const useRandomMovie = () => {
  const [trigger, { isFetching, error }] = useLazyGetRandomMovieQuery();
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null);

  const fetchRandomMovie = async () => {
    const response = await trigger({}).unwrap();
    const random =
      response.results[Math.floor(Math.random() * response.results.length)];
    setRandomMovie(random);
    return random; // Возвращаем случайный фильм для дальнейшего использования
  };

  return { fetchRandomMovie, randomMovie, isFetching, error };
};
