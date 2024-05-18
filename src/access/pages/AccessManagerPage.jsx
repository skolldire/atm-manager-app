import { Search } from "../../components/Search";
import { AccessCard } from "../components/AccessCard";
import { useSearch } from "../../hooks/useSearch";

export const AccessManagerPage = () => {
   const newAccessParam = useSearch();
  return (
     <>
        <div className="container mt-5">
           <h1>Access Manager</h1>
           <hr />
           <Search onNewSearchParam={newAccessParam} placeholderText="Id" />
           <AccessCard id={newAccessParam.searchParameter}/>
        </div>
     </>
  );
}
