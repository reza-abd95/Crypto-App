import React from "react";

function Chart({ chart, setChart }) {
  console.log(chart);
  return (
    <div className=" fixed  w-full h-full top-0 left-0 backdrop-blur-[3px]	">
      <span
        className=" cursor-pointer  inline-block  text-2xl font-bold bg-red-500 text-white w-8 h-8 text-center mt-8 ml-8 rounded-md leading-8"
        onClick={() => setChart(null)}
      >
        X
      </span>
      <div className=" w-[800px] m-auto p-5 mt-12 bg-[#18181ce6] border-solid border-2 border-red-500 rounded-3xl">
        <div>hi</div>
        <div>hi</div>
      </div>
    </div>
  );
}

export default Chart;
