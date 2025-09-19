import './App.css' 
import Posts from './pages/Posts'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="navbar">
        <div className='navbar__links'>
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;