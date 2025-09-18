import './App.css' 
import Posts from './pages/Posts'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;