import { useState } from "react"
import Button from "react-bootstrap/Button"

function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const logUsername = (e) => {
    setUsername(e.target.value)
  }

  const logPassword = (e) => {
    setPassword(e.target.value)
  }

  async function login(e) {
    e.preventDefault()
    setUsername("")
    setPassword("")
    await fetch ('http://localhost:4000/login', {
      method: 'POST', 
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'}

    })
  }

  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={logUsername}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={logPassword}
      />
      <Button type="submit" variant="dark">
        Submit
      </Button>
    </form>
  )
}

export default LoginPage
