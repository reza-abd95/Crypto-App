import React, { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getListCoin } from "../../services/cryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(getListCoin())
      .then((res) => res.json())
      .then((json) => setCoins(json));
  }, []);

  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  );
}

export default HomePage;
