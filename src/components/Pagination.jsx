import React, { useEffect } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumber = [];
  const pages = Math.ceil(totalPosts / postsPerPage);
  for (let i = 1; i <= pages; i++) {
    pageNumber.push(i);
  }
  return (
    <div className='join'>
      <button className='join-item btn' onClick={() => paginate(1)}>
        First
      </button>
      <button
        className='join-item btn'
        onClick={() => paginate(currentPage != 1 ? currentPage - 1 : 1)}
      >
        Prev
      </button>
      {/* Dynamic */}
      {pageNumber.map((number) => (
        <button
          className={
            currentPage == number
              ? "join-item btn btn-active"
              : "join-item btn "
          }
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}

      {/* Dynamic Ends */}
      <button
        className='join-item btn'
        onClick={() => paginate(currentPage != pages ? currentPage + 1 : pages)}
      >
        Next
      </button>

      <button className='join-item btn' onClick={() => paginate(pages)}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
