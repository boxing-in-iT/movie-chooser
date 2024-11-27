import React, { useEffect } from "react";
import { useRandomMovie } from "../../../hooks/useRandomMovie";
import { useMovieTrailer } from "../../../hooks/useMovieTrailer";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setRandomMovie } from "../../../redux/features/moviesSlice";
import { Genre } from "../../../data/interfaces";
import { getCountOfPages } from "../../../utility/getCountOfPages";

const RandomMovieButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const RandomMovieHandler = ({
  onModalToggle,
}: {
  onModalToggle: () => void;
}) => {
  const dispatch = useDispatch();
  const { fetchRandomMovie, randomMovie, isFetching } = useRandomMovie();
  const selectedGenres = useSelector((state: any) => state.movie.choosenGenres);

  useEffect(() => {
    dispatch(setRandomMovie(randomMovie));
  }, [randomMovie]);

  const handleFetch = async () => {
    const pagesCount = await getCountOfPages(selectedGenres);
    const movie = await fetchRandomMovie(pagesCount, selectedGenres);
    if (movie) {
      onModalToggle();
    }
  };

  return (
    <RandomMovieButton onClick={handleFetch} disabled={isFetching}>
      Random Movie
    </RandomMovieButton>
  );
};

export default RandomMovieHandler;
