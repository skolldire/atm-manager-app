import React from "react";

export const Search = ({ onNewSearchParam, placeholderText }) => {
   const plastring = "Search by " + placeholderText + "...";
   return (
      <>
         <div className="row mt-5 justify-content-end">
            <form className="d-flex" id="search">
               <input
                  id="searchInput"
                  className="form-control me-2"
                  type="text"
                  placeholder={plastring}
                  aria-label="Search"
                  value={onNewSearchParam.search}
                  onChange={onNewSearchParam.handleSearch}
               />
            </form>
         </div>
      </>
   );
};
