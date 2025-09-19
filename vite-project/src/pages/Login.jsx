import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../context";
const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    
    const login = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true') // Persist auth state
    }
  return (
    <div>
      <h1 style={{marginTop: 50, marginBottom: 30}}>Login Page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="login" />
        <MyInput type="password" placeholder="password" />
        <MyButton type="submit" style={{marginTop: 15}}>Войти</MyButton>
      </form>
    </div>
  )
}

export default Login;