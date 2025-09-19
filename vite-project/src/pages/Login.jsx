import MyInput from "../UI/input/MyInput";

const Login = () => {
  return (
    <div>
      <h1 style={{marginTop: 50, marginBottom: 30}}>Login Page</h1>
      <form>
<MyInput type="text" placeholder="login" />
<MyInput type="password" placeholder="password" />
</form>
    </div>
  )
}

export default Login;