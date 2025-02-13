import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { AtmRoutes } from "./AtmRoutes";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
   return (
      <>
         <Routes>
         <Route path="login/*" element={
                <PublicRoute>
                  <Routes>
                    <Route path="/*" element={<LoginPage />} />
                  </Routes>
                </PublicRoute>
              }
            />
            
            
            <Route path="/*" element={
              <PrivateRoute>
                <AtmRoutes />
              </PrivateRoute>
            } />
         </Routes>
      </>
   );
};
