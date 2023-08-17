import React from "react";
import home from "../../assets/icons/home.svg";
import { Link } from "react-router-dom";

const DetailsHeader = () => {
  return (
    <div className='w-full 2xl:h-16 xl:h-14 lg:h-14 h-14 flex items-center px-5 shadow shadow-lightGray'>
      <div className='w-full flex justify-between items-center'>
        <p className='text-2xl font-semibold'>Movie Details</p>
        <Link to='/'>
          <img src={home} className='h-7 w-7' alt='home icon' />
        </Link>
      </div>
    </div>
  );
};

export default DetailsHeader;
