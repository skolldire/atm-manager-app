import { useState } from "react";

export const LoginForm = ({ onNewLogin }) => {
   const [userValue, setUserValue] = useState("");
   const [passValue, setPassValue] = useState("");

   const onChangeUser = ({ target }) => {
      setUserValue(target.value);
   };

   const onChangePass = ({ target }) => {
      setPassValue(target.value);
   };

   const onSubmit = (event) => {
      event.preventDefault();
      if (userValue.trim().length <= 0 || passValue.trim().length <= 0) return;
      onNewLogin(userValue.trim(), passValue.trim());
      setUserValue("");
      setPassValue("");
   };

   return (
      <div className="container mt-5">
         <h1>Login</h1>
         <hr />
         <div className="card bg-light mb-3 text-center">
            <form className="card-body" id="login" onSubmit={onSubmit}>
               <div className="input-group mb-3">
                  <input
                     id="inputUser"
                     type="text"
                     placeholder="User"
                     aria-label="Search"
                     value={userValue}
                     onChange={onChangeUser}
                  />
               </div>

               <div className="input-group mb-3">
                  <input
                     id="inputPassword"
                     type="password"
                     placeholder="Password"
                     aria-label="Search"
                     value={passValue}
                     onChange={onChangePass}
                  />
               </div>
               <div className="input-group mb-3">
                  <button type="submit" className="btn btn-outline-dark">
                     Login
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};
