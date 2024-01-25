import React from "react";
import chartup from "../../assets/chart-up.svg";
import chartdown from "../../assets/chart-down.svg";

function TableRow({
  coin: {
    name,
    image,
    symbol,
    current_price,
    price_change_percentage_24h,
    total_volume,
  },
  currency,
  setChart,
}) {
  const currencySymbol = () => {
    switch (currency) {
      case "usd":
        return "$ ";
      case "eur":
        return "€ ";
      case "jpy":
        return "¥ ";
    }
  };
  const showHandler = () => {
    setChart("a");
  };
  return (
    <tr className=" h-20 border-b-2 border-solid border-[#22262e] font-semibold text-lg">
      <td>
        <div
          className="flex items-center cursor-pointer text-[#9fa6b7] "
          onClick={showHandler}
        >
          <img className=" h-6 w-6 mr-2 " src={image} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currencySymbol(currency)}
        {current_price.toLocaleString()}
      </td>
      <td
        className={`${
          price_change_percentage_24h > 0 ? "text-green-500" : "text-red-600"
        } px-2`}
      >
        {price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>{total_volume}</td>
      <td>
        <img
          src={price_change_percentage_24h > 0 ? chartup : chartdown}
          alt={name}
        />
      </td>
    </tr>
  );
}

export default TableRow;
