import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../router";
import Login from "../../pages/Login";
import { useContext } from "react";
import { AuthContext } from "../../context";

const AppRouter = () => {

const {isAuth} = useContext(AuthContext)

  return (
   <Routes>
  {isAuth
    ? privateRoutes.map((r, i) => (
        <Route key={i} path={r.path} element={r.element} />
      ))
    : publicRoutes.map((r, i) => (
        <Route key={i} path={r.path} element={r.element} />
      ))}

  <Route
    path="/login"
    element={isAuth ? <Navigate to="/posts" replace /> : <Login />}
  />

  <Route path="/" element={<Navigate to={isAuth ? "/posts" : "/login"} replace />} />
  <Route path="*" element={<Navigate to={isAuth ? "/error" : "/login"} replace />} />
</Routes>
  );
};

export default AppRouter;