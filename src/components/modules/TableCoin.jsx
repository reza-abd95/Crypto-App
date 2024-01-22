import React from "react";
import TableRow from "./TableRow";
import { RotatingLines } from "react-loader-spinner";

function TableCoin({ coins, loading, currency }) {
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
            <tr className=" [&>th]:py-2 text-xl text-left ">
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} currency={currency} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;
