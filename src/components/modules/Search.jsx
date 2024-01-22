import React, { useEffect, useState } from "react";
import { searchCoin } from "../../services/cryptoApi";

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (!text) return;

    console.log("first");
    const search = async () => {
      const res = await fetch(searchCoin(text));
      const json = await res.json();
      if (json.coins) setCoins(json.coins);

      console.log(coins);
    };
    search();
  }, [text]);
  return (
    <div className="text-black">
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
}

export default Search;
