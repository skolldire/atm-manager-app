import React from "react";
import { AtmList } from "..";
import { Search } from "../../home";
import { useState } from "react";

export const AtmManagerPage = () => {
   const [searchParam, setSearchParam] = useState("");

   const newSearchParam = (newValue) => {
      if (newValue.trim().length <= 0) return;
      setSearchParam(newValue);
   };
   return (
      <>
         <div className="container mt-5">
            <h1>Atm Manager</h1>
            <hr />
            <Search onNewSearchParam={(value) => newSearchParam(value)} />
            <AtmList location={searchParam} />
         </div>
      </>
   );
};
