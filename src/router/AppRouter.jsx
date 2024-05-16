import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HomeRoutes } from "../home";

export const AppRouter = () => {
   return (
      <>
         <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="/*" element={<HomeRoutes />} />
         </Routes>
      </>
   );
};
