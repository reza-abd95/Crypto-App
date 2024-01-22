import React, { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getListCoin } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
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
      <TableCoin coins={coins} loading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
