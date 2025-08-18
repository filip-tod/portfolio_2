import './login.scss'

function Login() {
  return (
    <div className="login-bg">
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign in</button>
        </form>
        <div className="login-options">

          <p>
            or use your email account
          </p>
        <div>
          <img src="" alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}


export default Login;