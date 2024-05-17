import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const AtmManagerApp = () => {
   return (
      <AuthProvider>
         <AppRouter />
      </AuthProvider>
   );
};
