function LoginPage() {
  return (
    <form className="login">
      <h1>Login</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginPage