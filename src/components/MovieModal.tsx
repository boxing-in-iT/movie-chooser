import React, { useEffect } from "react";
import { useRandomMovie } from "../hooks/useRandomMovie";
import { useMovieTrailer } from "../hooks/useMovieTrailer";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../redux/features/moviesSlice";
import Modal from "./Modal";
import styled from "styled-components";
import YouTube from "react-youtube";

const Loader = styled.span`
  width: 148px;
  height: 148px;
  border: 5px dotted #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
`;

const Container = styled.div`
  width: 80vw;
  min-height: 800px;
  background-color: #f5f5f5;
  color: black;
  padding: 20px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: absolute;
  gap: 50px;
`;

const MovieOverview = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 50px;
`;

const AddToFavouritesButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #43bd4f;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #3aae42;
  }
`;

const RemoveFromFavouritesButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #43bd4f;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #3aae42;
  }
`;

const MovieModal = ({
  isShowing,
  onClose,
}: {
  isShowing: boolean;
  onClose: () => void;
}) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state: any) => state.movie);
  const randomMovie = useSelector((state: any) => state.movie.randomMovie);
  const {
    fetchTrailer,
    video,
    isFetching: isTrailerFetching,
  } = useMovieTrailer();

  useEffect(() => {
    const fetchTrailerAsync = async () => {
      await fetchTrailer(randomMovie?.id);
    };
    if (randomMovie) {
      fetchTrailerAsync();
    }
  }, [randomMovie]);

  const handleToggleFavorite = () => {
    if (randomMovie) {
      dispatch(toggleFavorites(randomMovie));
    }
  };

  return (
    <Modal isShowing={isShowing} hide={onClose} title={"trailer"}>
      {isTrailerFetching ? (
        <Loader />
      ) : (
        <Container>
          {/* Movie Details and Actions */}
          {randomMovie && (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
              />
              <MovieOverview>
                <h1>{randomMovie.title}</h1>
                <p>{randomMovie.overview}</p>
                <p>{randomMovie.release_date}</p>
                <p>{randomMovie.vote_average}</p>
                {favorites.find((m: any) => m.id === randomMovie.id) ? (
                  <RemoveFromFavouritesButton onClick={handleToggleFavorite}>
                    Remove from Favourites
                  </RemoveFromFavouritesButton>
                ) : (
                  <AddToFavouritesButton onClick={handleToggleFavorite}>
                    Add to Favourites
                  </AddToFavouritesButton>
                )}
                {video?.key && <YouTube videoId={video.key} />}
              </MovieOverview>
            </>
          )}
        </Container>
      )}
    </Modal>
  );
};

export default MovieModal;
