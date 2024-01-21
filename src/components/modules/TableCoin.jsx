import React from "react";
import TableRow from "./TableRow";
import { RotatingLines } from "react-loader-spinner";

function TableCoin({ coins, loading }) {
  return (
    <div>
      {loading ? (
        <RotatingLines
          height="96"
          width="96"
          strokeColor="red"
          strokeWidth="5"
        />
      ) : (
        <table>
          <thead>
            <tr>
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
              <TableRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;
