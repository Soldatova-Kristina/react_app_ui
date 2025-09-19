import './App.css' 

import { BrowserRouter as Router} from "react-router-dom";
import NavBar from './UI/navbar/NavBar';
import AppRouter from './components/AppRouter/AppRouter';


function App() {
  return (
    <Router>
      <NavBar />
     <AppRouter />
    </Router>
  );
}

export default App;