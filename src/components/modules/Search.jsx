import React, { useEffect, useState } from "react";
import { searchCoin } from "../../services/cryptoApi";
import { RotatingLines } from "react-loader-spinner";

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    setCoins([]);
    if (!text) {
      setIsLoading(false);
      return;
    }

    console.log("first");
    const search = async () => {
      try {
        const res = await fetch(searchCoin(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          setCoins(json.coins);
          setIsLoading(false);
        } else {
          alert(json.status.error_message);
        }

        console.log(coins);
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    setIsLoading(true);
    search();
    return () => controller.abort();
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
      <div>
        {isLoading && (
          <RotatingLines
            height="50"
            width="50"
            strokeColor="red"
            strokeWidth="2"
          />
        )}
        <ul>
          {coins.map((coin) => (
            <li key={coin.id} className="text-white flex">
              <img src={coin.thumb} alt={coin.name} />
              <p>{coin.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
