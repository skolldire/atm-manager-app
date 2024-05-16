import { getAtmsByName } from "..";

export const AtmList = ({ location }) => {
   const atms = getAtmsByName(location);
   if (atms.length === 0) return;

   return (
      <>
         <div className="overflow-auto row mt-5" style={{ height: '65vh' }}>
            <table className="table table-hover">
               <thead className="sticky-top">
                  <tr>
                     <th scope="col">ID</th>
                     <th scope="col">Location</th>
                     <th scope="col">Type</th>
                     <th scope="col">Entity Bank</th>
                     <th scope="col">Status</th>
                  </tr>
               </thead>
               <tbody>
                  {atms.map((atm) => (
                     <tr key={atm.id}>
                        <th scope="row">{atm.id}</th>
                        <td>{atm.location}</td>
                        <td>{atm.type}</td>
                        <td>{atm.entityBank}</td>
                        <td>{atm.status}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   );
};
