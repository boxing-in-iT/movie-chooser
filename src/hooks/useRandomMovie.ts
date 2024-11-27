import { useState } from "react";
import { Genre, Movie } from "../data/interfaces";
import { useLazyGetRandomMovieQuery } from "../redux/services/movieApi";
import { useSelector } from "react-redux";

export const useRandomMovie = () => {
  const [trigger, { isFetching, error }] = useLazyGetRandomMovieQuery();
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null);

  const fetchRandomMovie = async (page: number, genres?: Genre[]) => {
    try {
      const response = await trigger({ genres, page }).unwrap();

      // Проверка наличия результатов
      if (!response.results || response.results.length === 0) {
        console.error("No movies found for the given criteria");
        setRandomMovie(null);
        return null; // Возвращаем null, если фильмы не найдены
      }

      const random =
        response.results[Math.floor(Math.random() * response.results.length)];
      setRandomMovie(random);
      console.log("Fetched random movie:", random);
      return random; // Возвращаем случайный фильм для дальнейшего использования
    } catch (err) {
      // Обработка ошибки запроса
      console.error("Error fetching random movie:", err);
      setRandomMovie(null); // Можно очистить данные при ошибке
      return null; // Возвращаем null, если произошла ошибка
    }
  };

  return { fetchRandomMovie, randomMovie, isFetching, error };
};
