import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from  "../../router";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((r, i) => (
        <Route key={i} path={r.path} element={r.element} />
      ))}
      <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>
  );
};

export default AppRouter;