import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { NavLink, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full mx-auto bg-gray-800 rounded-2xl p-8 shadow-2xl">
        <Outlet />
        <div className="mt-6 text-center">
          {isLogin ? (
            <NavLink
              to="/auth/register"
              onClick={toggleForm}
              className="text-blue-400 hover:text-blue-500 text-sm"
            >
              Hesabınız yok mu? Kayıt olun
            </NavLink>
          ) : (
            <NavLink
              to="/auth/login"
              onClick={toggleForm}
              className="text-blue-400 hover:text-blue-500 text-sm"
            >
              Zaten hesabınız var mı? Giriş yap
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
