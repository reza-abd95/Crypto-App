import React, { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getListCoin } from "../../services/cryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getListCoin());
      const json = await res.json();
      setCoins(json);
    };
    getData();
  }, []);

  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  );
}

export default HomePage;
