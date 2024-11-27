import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleGenre } from "../../../redux/features/moviesSlice";

const ChoosenGenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const GenreContainer = styled.div`
  position: relative;
  display: inline-block;
  /* cursor: pointer; */

  &:hover span {
    display: block;
    cursor: pointer;
  }
`;

const ChoosenGenre = styled.p`
  background-color: #43bd4f;
  padding: 5px 10px;
  border-radius: 5px;
  position: relative;
`;

const RemoveIcon = styled.span`
  display: none;
  position: absolute;
  top: 5px;
  right: -5px;
  background: #ff4d4f;
  color: #fff;
  font-size: 12px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const ChoosenGenres = () => {
  const selectedGenres = useSelector((state: any) => state.movie.choosenGenres);
  const dispatch = useDispatch();

  return (
    <ChoosenGenresWrapper>
      {selectedGenres.map((genre: any) => (
        <GenreContainer key={genre.id}>
          {" "}
          {/* Apply the key here */}
          <ChoosenGenre>{genre.name}</ChoosenGenre>
          <RemoveIcon onClick={() => dispatch(toggleGenre(genre))}>
            &times;
          </RemoveIcon>
        </GenreContainer>
      ))}
    </ChoosenGenresWrapper>
  );
};

export default ChoosenGenres;
