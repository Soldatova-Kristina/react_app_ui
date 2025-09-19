import './App.css' 
import Posts from './pages/Posts'
import About from './pages/About'
import Error from './pages/Error'
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import NavBar from './UI/navbar/NavBar';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </Router>
  );
}

export default App;