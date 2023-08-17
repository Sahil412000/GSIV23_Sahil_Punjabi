import React from "react";
import home from "../../assets/icons/home.svg";
import search from "../../assets/icons/search.svg";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchInput = ({ getMovies, setUpcomingMovies }) => {
  const [searchedText, setSearchedText] = useState("");

  const handleInputChange = async (e) => {
    setSearchedText(e.target.value);
    if (e.target.value === "") await getMovies();
  };

  const handleMovieSearch = async () => {
    if (searchedText === "") {
      alert("Search query cannot be empty");
      return;
    }
    await axios
      .get(
        `${process.env.REACT_APP_MOVIES_API_URL}/search/movie?query=${searchedText}&include_adult=false&language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_MOVIES_ACCESS_TOKEN}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        const searchResults = response.data.results;
        setUpcomingMovies(searchResults);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='w-full 2xl:h-16 xl:h-14 lg:h-14 h-14 flex items-center px-5 shadow shadow-lightGray'>
      <div className='w-full flex justify-between items-center'>
        <div className='flex space-x-1 md:w-1/2 w-5/6 items-center'>
          <input
            type='text'
            onChange={handleInputChange}
            className='h-10 w-full p-2 px-3 bg-disabled text-darkGray rounded-md focus:outline-slate-50'
            placeholder='Search'
          />
          <img
            src={search}
            className='h-7 w-7 cursor-pointer'
            alt='search icon'
            onClick={handleMovieSearch}
          />
        </div>
        <Link to='/'>
          <img src={home} className='h-7 w-7' alt='home icon' />
        </Link>
      </div>
    </div>
  );
};

export default SearchInput;
