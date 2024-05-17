import { useState } from "react";
import { AuthContext } from "..";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "..";

export const LoginPage = () => {
   const { login } = useContext(AuthContext);
   const navigate = useNavigate();

   const onLogin = (userParam, passParam) => {
      const lastPath = localStorage.getItem("lastPath") || "/";

      login(userParam, passParam);

      navigate(lastPath, {
         replace: true,
      });
   };

   return (
      <>
         <LoginForm onNewLogin={onLogin} />
      </>
   );
};
