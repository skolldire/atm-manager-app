import { AtmList } from "..";
import { Search } from "../../components/SearchAuto";
import { useSearch } from "../../hooks/useSearch";

export const AtmManagerPage = () => {
   const newSearchParam = useSearch();
   return (
      <>
         <div className="container mt-5">
            <h1>Atm Manager</h1>
            <hr />
            <Search onNewSearchParam={newSearchParam}  placeholderText="Name"/>
            <AtmList name={newSearchParam.search} />
         </div>
      </>
   );
};
