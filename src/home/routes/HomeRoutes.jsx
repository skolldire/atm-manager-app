import { Route, Routes } from "react-router-dom";
import { Navbar } from "..";
import { HomePage } from "../";
import { AtmManagerPage } from "../../atm";
import { BalanceCenterPage } from "../../balance";
import { AccessManagerPage } from "../../access";
import { ReportCenterPage } from "../../reports";

export const HomeRoutes = () => {
   return (
      <>
         <Navbar />
         <div className="container">
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="atms" element={<AtmManagerPage />} />
               <Route path="balances" element={<BalanceCenterPage />} />
               <Route path="access" element={<AccessManagerPage />} />
               <Route path="reports" element={<ReportCenterPage />} />
            </Routes>
         </div>
      </>
   );
};
