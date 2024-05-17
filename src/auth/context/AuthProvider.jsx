import { useReducer } from "react";
import { AuthContext, authReducer, getUserByUserName, types } from "..";

const init = () => {
   const user = JSON.parse(localStorage.getItem("user"));

   return {
      logged: !!user,
      user: user,
   };
};

export const AuthProvider = ({ children }) => {
   const [authState, dispatch] = useReducer(authReducer, {}, init);

   const login = (userName = "", pass = "") => {
      const usr = getUserByUserName(userName);

      const user = { id: usr.id, name: usr.name };
      const action = { type: types.login, payload: user };

      if (!usr.password === pass) {
         alert("Usuario o contraseña incorrectos");
         return;
      }
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(action);
   };

   const logout = () => {
      localStorage.removeItem("user");
      const action = { type: types.logout };
      dispatch(action);
   };

   return (
      <AuthContext.Provider
         value={{
            ...authState,
            login,
            logout,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};
