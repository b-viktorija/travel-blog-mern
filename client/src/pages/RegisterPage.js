import { useState } from "react"
import Button from "react-bootstrap/Button"
import { Container } from "react-bootstrap"

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
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-type": "application/json" },
    })
    if (response.status !== 200) {
      alert("Registration failed")
    } else {
      alert("Registration successful")
    }
  }

  return (
    <Container>
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
      <img src="/images/30765-3-travel-photos.png" className="d-flex m-auto" />
    </Container>
  )
}

export default RegisterPage
