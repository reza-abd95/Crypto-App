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
    <div className="  w-96 flex justify-between items-center mx-auto mb-24 [&>p]:rounded-md [&>p]:border-solid [&>p]:border-2 [&>p]:border-red-500 [&>p]:text-center  [&>p]:w-7">
      <button
        onClick={previousHandler}
        className={`${
          page == 1 ? "opacity-30 cursor-auto" : null
        } bg-red-500 text-white border-none py-1 px-2 rounded text-base cursor-pointer `}
      >
        Previous
      </button>
      <p className={page == 1 ? "bg-red-500" : null}>1</p>
      <p className={page == 2 ? "bg-red-500" : null}>2</p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p className={"bg-red-500"}>{page}</p>
        </>
      )}
      <span>...</span>
      <p className={page == 9 ? "bg-red-500" : null}>9</p>
      <p className={page == 10 ? "bg-red-500" : null}>10</p>

      <button
        onClick={nextHandler}
        className={`${
          page == 10 ? "opacity-30 cursor-auto" : null
        } bg-red-500 text-white border-none py-1 px-2 rounded text-base cursor-pointer `}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
