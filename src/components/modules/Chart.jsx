import React, { useState } from "react";
import { convertData } from "../../helpers/convertData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  const data = convertData(chart, type);
  console.log(chart);

  return (
    <div className=" fixed  w-full h-full top-0 left-0 backdrop-blur-[3px]	">
      <span
        className=" cursor-pointer  inline-block  text-2xl font-bold bg-red-500 text-white w-8 h-8 text-center mt-8 ml-8 rounded-md leading-8"
        onClick={() => setChart(null)}
      >
        X
      </span>
      <div className=" w-[800px] m-auto p-5 mt-12 bg-[#18181ce6] border-solid border-2 border-[#404042] rounded-3xl">
        <div className="flex items-center mt-0 mx-3 mb-8">
          <img
            src={chart.coin.image}
            alt={chart.coin.name}
            className="w-10 h-10 mr-5"
          />
          <p className="text-2xl font-bold">{chart.coin.name}</p>
        </div>
        <div className=" w-[760px] h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={400}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid stroke="#404042" />
              <YAxis dataKey={type} domain={["auto", "auto"]} />
              <XAxis dataKey="date" hide />
              <Tooltip />
              <Line
                type="monotone"
                dataKey={type}
                stroke="red"
                strokeWidth="2px"
              />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <button onClick={() => setType("market_caps")}>Market</button>
          <button onClick={() => setType("prices")}>Prices</button>
          <button onClick={() => setType("total_volumes")}>
            Total Volumes
          </button>
        </div>
        <div>
          <div>
            <p>Prices: </p>
            <span>${chart.coin.current_price}</span>
          </div>
          <div>
            <p>ATH: </p>
            <span>${chart.coin.ath}</span>
          </div>
          <div>
            <p>Market Cap: </p>
            <span>${chart.coin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
