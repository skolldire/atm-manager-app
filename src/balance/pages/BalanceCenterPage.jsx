import { Search } from "../../home";
import { useState } from "react";
import { BalanceCardPage } from "..";

export const BalanceCenterPage = () => {
  const [searchParam, setSearchParam] = useState("");

  const newSearchParam = (newValue) => {
     if (newValue.trim().length <= 0) return;
     setSearchParam(newValue);
  };
  return (
     <>
        <div className="container mt-5">
           <h1>Balance Center</h1>
           <hr />
           <Search
              onNewSearchParam={(value) => newSearchParam(value)}
              placeholderText="Id"
           />
           <BalanceCardPage id={searchParam} />
        </div>
     </>
  );
};
