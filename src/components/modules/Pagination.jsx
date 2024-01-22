import React, { useState } from "react";

function Pagination({ page, setPage }) {
  const previousHandler = () => {
    if (page <= 1) {
      return;
    }
    setPage((page) => page - 1);
  };
  const nextHandler = () => {
    if (page >= 10) {
      return;
    }
    setPage((page) => page + 1);
  };
  return (
    <div className="flex justify-center ">
      <button onClick={previousHandler} className=" bg-red-300">
        Previous
      </button>
      <p className={page == 1 ? "text-red-500" : " text-inherit"}>1</p>
      <p className={page == 2 ? "text-red-500" : " text-inherit"}>2</p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p>{page}</p>
        </>
      )}
      <span>...</span>
      <p>9</p>
      <p>10</p>

      <button onClick={nextHandler} className=" bg-red-300">
        Next
      </button>
    </div>
  );
}

export default Pagination;
