import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export const Search = ({ onNewSearchParam }) => {
   const [inputValue, setInputValue] = useState("");

   const onChange = ({ target }) => {
      setInputValue(target.value);
   };

   const onSubmit = (event) => {
      event.preventDefault();
      if (inputValue.trim().length <= 0) return;
      setInputValue("");
      onNewSearchParam(inputValue.trim());
   };

   return (
      <>
         <div className="container-fluid row mt-5 justify-content-end">
            <form className="d-flex" id="search" onSubmit={onSubmit}>
               <input
               id="searchInput"
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={inputValue}
                  onChange={onChange}
               />
               <button className="btn btn-outline-dark" id="click" type="submit">
                  Search
               </button>
            </form>
         </div>
      </>
   );
};

Search.propTypes = {
   onNewSearchParam: PropTypes.func.isRequired,
};
