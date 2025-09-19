import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../router";

const AppRouter = () => {
  return (
    <Routes>
      {privateRoutes.map((r, i) => (
        <Route key={i} path={r.path} element={r.element} />
      ))}
      {publicRoutes.map((r, i) => (
        <Route key={i} path={r.path} element={r.element} />
      ))}
      <Route path="/" element={<Navigate to="/posts" replace />} />
      <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>
  );
};

export default AppRouter;