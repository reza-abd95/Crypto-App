import React from "react";
import TableRow from "./TableRow";
import { RotatingLines } from "react-loader-spinner";

function TableCoin({ coins, loading }) {
  return (
    <div className=" w-full flex justify-center mt-12 mx-0 mb-24 min-h-[1000px]">
      {loading ? (
        <RotatingLines
          height="96"
          width="96"
          strokeColor="red"
          strokeWidth="2"
        />
      ) : (
        <table className=" w-full border-collapse">
          <thead className="border-b-2 border-solid border-white">
            <tr className=" text-xl text-left">
              <th className=" py-2">Coin</th>
              <th className=" py-2">Name</th>
              <th className=" py-2">Price</th>
              <th className=" py-2">24h</th>
              <th className=" py-2">Total Volume</th>
              <th className=" py-2"></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;
