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
    <div className=" mt-12 relative">
      <input
        className=" w-80 h-14 p-3 text-lg bg-[#23242e] border-none rounded-md focus:outline-none"
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        className="h-14 px-2 py-3 ml-5 text-lg bg-[#23242e] border-none rounded-md focus:outline-none"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {(!!coins.length || isLoading) && (
        <div className=" absolute text-center top-20 w-80 h-96 rounded-md overflow-y-scroll p-5 bg-[#18181c] border-solid border-2 border-[#22262e] scrollbar">
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
              <li
                key={coin.id}
                className="text-white flex mb-4 pb-[5px] border-b-2 border-solid border-[#22262e]"
              >
                <img
                  className=" mr-2 w-7 h-7"
                  src={coin.thumb}
                  alt={coin.name}
                />
                <p>{coin.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
