import { useState } from "react";

export const useSearch = () => {
   const [search, setSearch] = useState("");
   const [searchParameter, setSearchParameter] = useState("");

   const handleSearch = (e) => {
      setSearch(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (search.trim().length <= 0) return;
      setSearchParameter(search);
   };

   return { search, searchParameter, handleSearch, handleSubmit};
};
