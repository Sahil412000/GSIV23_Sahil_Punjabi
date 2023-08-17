import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import placeholder from "../../assets/placeholder/movie-placeholder.jpeg";
import DetailsHeader from "../../components/detailsHeader/DetailsHeader";

const Details = () => {
  const params = useParams();

  const [movieDetails, setMovieDetails] = useState({});

  const getMovieDetails = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_MOVIES_API_URL}/movie/${params?.movieId}?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_MOVIES_ACCESS_TOKEN}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        const movieDetails = response.data;
        setMovieDetails(movieDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const time_convert = (num) => {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + "hr : " + minutes;
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <>
      <DetailsHeader />
      <div className='w-full p-5'>
        {movieDetails?.id && (
          <div className='w-full flex md:flex-row flex-col md:space-x-5 space-x-0 space-y-5 md:space-y-0 text-left'>
            <div className='h-max xl:w-1/5 md:w-1/4 w-full '>
              <img
                src={
                  movieDetails?.poster_path
                    ? `${process.env.REACT_APP_MOVIES_IMAGE_PATH}${movieDetails.poster_path}`
                    : placeholder
                }
                alt='poster'
                className='h-full w-full object-cover rounded-sm'
              />
            </div>
            <div className='md:w-4/5 w-full space-y-3'>
              <div className='flex items-end space-x-2'>
                <p className='font-semibold text-darkGray text-3xl'>
                  {movieDetails.title}
                </p>
                <p className='text-lightGray text-2xl'>
                  ({movieDetails.vote_average})
                </p>
              </div>
              <p className='text-lg text-darkGray'>
                {movieDetails.release_date.slice(0, 4)} |{" "}
                {time_convert(movieDetails.runtime)}mins
              </p>
              <p className='text-lg text-darkGray'>
                Description: {movieDetails.overview}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Details;
