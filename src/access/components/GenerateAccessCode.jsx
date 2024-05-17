import React from "react";
import 'animate.css/animate.css'

export const GenerateAccessCode = ({ closeAction }) => {
   const generateCode = () => {
      const characters =
         "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let code = "";
      for (let i = 0; i < 8; i++) {
         const randomIndex = Math.floor(Math.random() * characters.length);
         code += characters[randomIndex];
      }
      return code;
   };

   return (
            <div className="row mt-5">
            <div className="card text-center">
               <div className="card-body ">
                  <h3 className="card-title">
                     <b>Access Code:</b>{" "}
                  </h3>
                  <h1 className="animate__animated animate__fadeIn animate__slow">{generateCode()}</h1>
                  <button
                     className="btn btn-outline-dark mt-3"
                     onClick={closeAction}
                  >
                     OK
                  </button>
               </div>
            </div>
         </div>
   );
};
