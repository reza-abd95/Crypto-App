import React from "react";
import chartup from "../../assets/chart-up.svg";
import chartdown from "../../assets/chart-down.svg";

function TableCoin({ coins }) {
  return (
    <div>
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
            <tr key={coin.id}>
              <td>
                <div>
                  <img src={coin.image} alt="" />
                  <span>{coin.symbol.toUpperCase()}</span>
                </div>
              </td>
              <td>{coin.name}</td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
              <td>{coin.total_volume}</td>
              <td>
                <img
                  src={
                    coin.price_change_percentage_24h > 0 ? chartup : chartdown
                  }
                  alt={coin.name}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCoin;
