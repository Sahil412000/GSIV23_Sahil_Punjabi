import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../components/moviecard/MovieCard";
import SearchInput from "../../components/searchInput/SearchInput";

const List = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const getMovies = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_MOVIES_API_URL}/movie/upcoming?language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_MOVIES_ACCESS_TOKEN}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        const upcomingMovies = response.data.results;
        setUpcomingMovies(upcomingMovies);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <SearchInput
        getMovies={getMovies}
        setUpcomingMovies={setUpcomingMovies}
      />
      <div className='w-full p-5'>
        <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 gap-5 w-full h-max'>
          {upcomingMovies &&
            upcomingMovies?.length > 0 &&
            upcomingMovies.map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  title={movie.original_title}
                  description={movie.overview}
                  rating={movie.vote_average}
                  image_path={movie.poster_path}
                  movie_id={movie.id}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default List;
