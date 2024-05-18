import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth";
import { useContext } from "react";

export const Navbar = () => {
   const { user, logout } = useContext(AuthContext);
   const navigate = useNavigate();

   const onLogout = () => {
      logout();
      navigate("/login", {
         replace: true,
      });
   };

   return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
         <div className="navbar-collapse">
            <ul className="navbar-nav ml-auto">
               <span className="nav-item nav-link active">{user.name}</span>

               <button className="nav-item nav-link btn" onClick={onLogout}>
                  Logout
               </button>
            </ul>
         </div>
         <div className="navbar-collapse  collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <div className="navbar-nav">
               <NavLink
                  className={({ isActive }) =>
                     `nav-item nav-link  ${isActive ? "active" : ""}`
                  }
                  to="/"
               >
                  ATM Manager
               </NavLink>
               <NavLink
                  className={({ isActive }) =>
                     `nav-item nav-link  ${isActive ? "active" : ""}`
                  }
                  to="/balances"
               >
                  Balance Center
               </NavLink>
               <NavLink
                  className={({ isActive }) =>
                     `nav-item nav-link  ${isActive ? "active" : ""}`
                  }
                  to="/access"
               >
                  Access Manager
               </NavLink>
            </div>
         </div>
      </nav>
   );
};
