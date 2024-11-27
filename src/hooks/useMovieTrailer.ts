import { useState } from "react";
import { useLazyGetMovieTrailersByIdQuery } from "../redux/services/movieApi";

export const useMovieTrailer = () => {
  const [trigger, { isFetching, error }] = useLazyGetMovieTrailersByIdQuery();
  const [video, setVideo] = useState<any>(null);

  const fetchTrailer = async (movieId: number) => {
    const response = await trigger(movieId).unwrap();
    const trailer = response?.results.find(
      (item: any) => item.type === "Trailer"
    );
    setVideo(trailer);
    return trailer; // Возвращаем трейлер, если нужен
  };

  return { fetchTrailer, video, isFetching, error };
};
