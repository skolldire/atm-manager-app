import { Search } from "../../home";
import { useState } from "react";
import { AccessCard } from "../components/AccessCard";

export const AccessManagerPage = () => {
  const [searchParam, setSearchParam] = useState("");

  const newSearchParam = (newValue) => {
     if (newValue.trim().length <= 0) return;
     setSearchParam(newValue);
  };
  return (
     <>
        <div className="container mt-5">
           <h1>Access Manager</h1>
           <hr />
           <Search onNewSearchParam={(value) => newSearchParam(value)} placeholderText="Id" />
           <AccessCard id={searchParam}/>
        </div>
     </>
  );
}
