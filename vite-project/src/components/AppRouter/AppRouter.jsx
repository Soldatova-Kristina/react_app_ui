import Posts from '../../pages/Posts.jsx';
import About from '../../pages/About.jsx';
import Error from '../../pages/Error.jsx';

import {Routes, Route, Navigate} from "react-router-dom";

const AppRouter = () => {
  return (
 <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
  )
}

export default AppRouter;