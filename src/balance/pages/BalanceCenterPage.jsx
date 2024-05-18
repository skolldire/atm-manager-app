import { Search } from "../../components/Search";
import { useSearch } from "../../hooks/useSearch";
import { BalanceCardPage } from "..";

export const BalanceCenterPage = () => {
   const newBalanceParam = useSearch();
   return (
      <>
         <div className="container mt-5">
            <h1>Balance Center</h1>
            <hr />
            <Search
               onNewSearchParam={newBalanceParam}
               placeholderText="Id"
            />
            <BalanceCardPage id={newBalanceParam.searchParameter} />
         </div>
      </>
   );
};
