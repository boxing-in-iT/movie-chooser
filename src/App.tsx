import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { MOVIE_GENRES } from "./data/data";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetRandomMovieQuery,
  useLazyGetRandomMovieQuery,
} from "./redux/services/movieApi";
import useModal from "./hooks/useModal";
import Modal from "./components/Modal";
import YouTube from "react-youtube";
import { Movie } from "./data/interfaces";
import { toggleFavorites } from "./redux/features/moviesSlice";
import { useRandomMovie } from "./hooks/useRandomMovie";
import { useMovieTrailer } from "./hooks/useMovieTrailer";
import Main from "./pages/main/Main";

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;
