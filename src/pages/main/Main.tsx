import styled from "styled-components";
import useModal from "../../hooks/useModal";
import RandomMovieHandler from "./components/RandomMovieHandler";
import GenresList from "./components/GenresList";
import MovieModal from "../../components/MovieModal";
import ChoosenGenres from "./components/ChoosenGenres";

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

const Main = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <AppContainer>
        <MainContent>
          <RandomMovieHandler onModalToggle={toggle} />
          <p>Ты можешь выбрать любимые жанры:</p>
          <ChoosenGenres />

          <GenresList />
        </MainContent>
      </AppContainer>
      <MovieModal isShowing={isShowing} onClose={toggle} />
    </>
  );
};

export default Main;
