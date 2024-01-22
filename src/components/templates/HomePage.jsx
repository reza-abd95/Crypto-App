import React, { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getListCoin } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getListCoin(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    getData();
  }, [page]);

  return (
    <div className="w-full">
      <Pagination page={page} setPage={setPage} />
      <TableCoin coins={coins} loading={isLoading} />
    </div>
  );
}

export default HomePage;
