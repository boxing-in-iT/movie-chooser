import React, { useState } from "react";
import styled from "styled-components";
import { MOVIE_GENRES } from "../../data/data";
import useModal from "../../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import { useRandomMovie } from "../../hooks/useRandomMovie";
import { useMovieTrailer } from "../../hooks/useMovieTrailer";
import Modal from "../../components/Modal";
import YouTube from "react-youtube";
import { Movie } from "../../data/interfaces";
import { toggleFavorites } from "../../redux/features/moviesSlice";
import RandomMovieHandler from "./components/RandomMovieHandler";
import GenresList from "./components/GenresList";
import MovieModal from "../../components/MovieModal";

const AppContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainContent = styled.main`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RandomMovieButton = styled.button`
  width: 700px;
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

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
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

const Main = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <AppContainer>
        <MainContent>
          <RandomMovieHandler onModalToggle={toggle} />
          <GenresList />
        </MainContent>
      </AppContainer>
      <MovieModal isShowing={isShowing} onClose={toggle} />
    </>
  );
};

export default Main;
