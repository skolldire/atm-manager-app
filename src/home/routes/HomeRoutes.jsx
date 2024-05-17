import { Route, Routes } from "react-router-dom";
import { Navbar } from "..";
import { AtmCardPage, AtmManagerPage } from "../../atm";
import { BalanceCenterPage } from "../../balance";
import { AccessManagerPage } from "../../access";

export const HomeRoutes = () => {
   return (
      <>
         <Navbar />
         <div className="container">
            <Routes>
               <Route path="/" element={<AtmManagerPage />} />
               <Route path="atm/:id" element={<AtmCardPage />} />
               <Route path="balances" element={<BalanceCenterPage />} />
               <Route path="access" element={<AccessManagerPage />} />
            </Routes>
         </div>
      </>
   );
};
