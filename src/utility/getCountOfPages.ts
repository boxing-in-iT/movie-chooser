import { Genre } from "../data/interfaces";

export const getCountOfPages = async (genres: Genre[]) => {
  let pagesCount = 0;

  const genreQuery =
    Array.isArray(genres) && genres.length > 0
      ? `&with_genres=${genres.map((genre) => genre.id).join(",")}`
      : "";

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&vote_average.gte=7&vote_count.gte=500&language=ru-US&page=1&sort_by=popularity.desc${genreQuery}`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZiYjc4ZTI2ZWU5NGVhYjY5Yzk5YjZmZDI4ZWY1MSIsIm5iZiI6MTczMjU2NDU2NS4yOTY5OTY0LCJzdWIiOiI2NzQ0ZDU4MjQ2MjYwZTE0ZmJlYjRmNmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UJf2NDOoqkGHnb0wpwgnfRdcL--hpl6kAy0EN1sgjJw`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    pagesCount = data.total_pages;
  } catch (error) {
    console.error("Ошибка:", error);
  }

  return pagesCount;
};
