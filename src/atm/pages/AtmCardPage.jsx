import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAtmById } from "../helpers/getAtmById";

export const AtmCardPage = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const atm = useMemo(() => getAtmById(id), [id]);

   const onReturn = () => {
      navigate(-1);
   };
   return (
      <>
         <div className="row mt-5">
            <h1>{atm.name}</h1>
            <hr />
            <div className="card w-100">
               <div className="card-body">
                  <h3 className="card-title"><b>Location:</b> {atm.location}</h3>
                  <hr />
                  <div className="row">
                     <div className="col">
                        <p className="card-text">
                           <b>Id:</b> {atm.id}
                        </p>
                        <p className="card-text">
                           <b>Type:</b> {atm.type}
                        </p>
                        <p className="card-text">
                           <b>Entity Bank:</b> {atm.entityBank}
                        </p>
                        <p className="card-text">
                           <b>Managed By:</b> {atm.managedBy}
                        </p>
                        <p className="card-text">
                           <b>Valuables Management:</b>{" "}
                           {atm.valuablesManagement}
                        </p>
                     </div>
                     <div className="col">
                        <p className="card-text">
                           <b>Status:</b> {atm.status}
                        </p>
                        {atm.alerts.length > 0 && (
                           <p className="card-text">
                              <b>Alerts:</b>{" "}
                              {atm.alerts.map((alert, index, array) => {
                                 if (index === array.length - 1) {
                                    return alert;
                                 } else {
                                    return alert + ", ";
                                 }
                              })}
                           </p>
                        )}
                        {atm.provision.scheduled && (<p className="card-text">
                           <b>Provision:</b> {atm.provision.date}
                        </p>)}
                     </div>
                  </div>
                  <button
                     className="btn btn-outline-dark mt-3"
                     onClick={onReturn}
                  >
                     Return
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};
