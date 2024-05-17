import { useMemo } from "react";
import { getAtmById } from "../../atm";
import { GenerateAccessCode } from "./GenerateAccessCode";
import { useState } from "react";

export const AccessCard = ({ id }) => {
   const access = useMemo(() => getAtmById(id), [id]);
   const [showPopup, setShowPopup] = useState(false);
   if (access == null) return;
   const approve = access.alerts.length > 0 || access.provision.scheduled;
   const onGenerated = () => {
      setShowPopup(true);
   };

   const closeSection = () => {
      setShowPopup(false);
   };

   return (
      <>
         <div className="row mt-5">
            <div className="card w-100">
               <div className="card-body">
                  <h3 className="card-title">
                     <b>Access Status:</b> {approve ? "Approved" : "Denied"}
                  </h3>
                  <hr />
                  <p className="card-text">
                     {access.name} <b>{approve ? "has" : "does not have"}</b> an
                     approved access request in the system.
                  </p>
                  {approve && (
                     <button
                        className="btn btn-outline-dark mt-3"
                        onClick={onGenerated}
                     >
                        Generate Access Code
                     </button>
                  )}
                  {showPopup && (
                     <GenerateAccessCode closeAction={closeSection}/>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};
