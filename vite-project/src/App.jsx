import './App.css' 

import { BrowserRouter as Router} from "react-router-dom";
import NavBar from './UI/navbar/NavBar';
import AppRouter from './components/AppRouter/AppRouter';
import { AuthContext } from './context';
import { useState, useEffect } from 'react';


function App() {
  const [isAuth, setIsAuth] = useState(false)
  
  useEffect(() => {
    // Check if user was previously authenticated
    const authStatus = localStorage.getItem('auth')
    if (authStatus === 'true') {
      setIsAuth(true)
    }
  }, [])
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <Router>
      <NavBar />
     <AppRouter />
    </Router>
    </AuthContext.Provider>
    
  );
}

export default App;