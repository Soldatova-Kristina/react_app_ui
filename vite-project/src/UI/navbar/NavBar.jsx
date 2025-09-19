import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context";
import MyButton from "../button/MyButton";

const  NavBar = ()=> {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className="navbar">
        <div className='navbar__links'>
          {isAuth ? (
            <>
              <Link to="/about">About</Link>
              <Link to="/posts">Posts</Link>
              <MyButton onClick={logout} style={{marginLeft: 10}}>Выйти</MyButton>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
  )
}

export default NavBar