import { Link } from "react-router-dom";
import { getAtmsByName } from "..";
import { useMemo } from "react";

export const AtmList = ({ name }) => {
   const atms = useMemo(() => getAtmsByName(name), [name]);
   if (atms.length === 0) return;

   return (
      <>
         <div className="overflow-auto row mt-5" style={{ maxHeight: "65vh" }}>
            <table className="table table-hover">
               <thead className="sticky-top">
                  <tr>
                     <th scope="col">ID</th>
                     <th scope="col">Name</th>
                     <th scope="col">Type</th>
                     <th scope="col">Entity Bank</th>
                     <th scope="col">Status</th>
                     <th scope="col">View</th>
                  </tr>
               </thead>
               <tbody>
                  {atms.map((atm) => (
                     <tr key={atm.id}>
                        <th scope="row">{atm.id}</th>
                        <td>{atm.name}</td>
                        <td>{atm.type}</td>
                        <td>{atm.entityBank}</td>
                        <td>{atm.status}</td>
                        <td>
                           <Link
                              className="alert-link"
                              role="alert"
                              to={`/atm/${atm.id}`}
                           >
                              More ...
                           </Link>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   );
};
