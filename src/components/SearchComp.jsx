import React from "react";

const SearchComp = ({ HandleSearch } = props) => {
  return (
    <input
      type='text'
      placeholder='Search Here'
      className='input input-bordered w-full'
      onChange={(e) => HandleSearch(e.target.value)}
    />
  );
};

export default SearchComp;
