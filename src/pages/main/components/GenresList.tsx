import React, { useState } from "react";
import { MOVIE_GENRES } from "../../../data/data";
import styled from "styled-components";

const GenresListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  list-style: none;
  gap: 25px;
  font-size: 30px;
`;

const GenresListItem = styled.li`
  padding: 10px 20px;
  width: 175px;
  height: 50px;
  background-color: #43bd4f;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;

  &:hover {
    background-color: #3aae42;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

const GenresList = () => {
  const [genres] = useState(MOVIE_GENRES);
  return (
    <GenresListWrapper>
      {genres.map((genre) => (
        <GenresListItem key={genre.id}>
          <p>{genre.name}</p>
        </GenresListItem>
      ))}
    </GenresListWrapper>
  );
};

export default GenresList;
