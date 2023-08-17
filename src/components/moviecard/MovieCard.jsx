import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/placeholder/movie-placeholder.jpeg";

const MovieCard = ({ title, description, rating, image_path, movie_id }) => {
  return (
    <Link to={`/details/${movie_id}`}>
      <div className='2xl:w-72 xl:w-56 h-max rounded-md shadow shadow-lightGray cursor-pointer'>
        <div className='w-full h-60 rounded-md'>
          <img
            src={
              image_path
                ? `${process.env.REACT_APP_MOVIES_IMAGE_PATH}${image_path}`
                : placeholder
            }
            alt=''
            className='h-full w-full object-cover rounded-md'
          />
        </div>
        <div className='p-3 space-y-2 text-left'>
          <div className='flex space-x-6 justify-between'>
            <p className='truncate font-semibold text-darkGray'>{title}</p>
            <p className='text-lightGray'>({rating})</p>
          </div>
          <div className='truncateTwo text-sm text-darkGray xl:text-md lg:text-sm'>
            {description}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
