import { useState } from "react";
import Button from 'react-bootstrap/Button';


function RegisterPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const logUsername = (e) => {
    setUsername(e.target.value)
  }

  const logPassword = (e) => {
    setPassword(e.target.value)
  }

  async function registerUser(e) {
    e.preventDefault()
    setUsername("")
    setPassword("")
    // send post request w/o installing axios or other library
    await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-type": "application/json" },
    })
  }

  return (
    <form className="register" onSubmit={registerUser}>
      <h1>Register</h1>
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
        Register
      </Button>
    </form>
  )
}

export default RegisterPage
