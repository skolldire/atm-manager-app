import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
   const navigate = useNavigate();

   const onLogout = () => {
      navigate("/login", {
         replace: false,
      });
   };

   return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
         <div className="navbar-collapse">
            <ul className="navbar-nav ml-auto">
               <span className="nav-item nav-link active">
                  Admin
               </span>

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
                  Home
               </NavLink>
               <NavLink
                  className={({ isActive }) =>
                     `nav-item nav-link  ${isActive ? "active" : ""}`
                  }
                  to="/atms"
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
               <NavLink
                  className={({ isActive }) =>
                     `nav-item nav-link  ${isActive ? "active" : ""}`
                  }
                  to="/reports"
               >
                  Report Center
               </NavLink>
            </div>
         </div>
      </nav>
   );
};
