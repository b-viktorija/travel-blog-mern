import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./header.css"

// fix header responsivity;

function Header() {
  const [username, setUsername] = useState(null)

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username)
      })
    })
  }, [])

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    })
  }

  return (
    <header>
      <Link to="/" className="logo">
        <img src="images/globe.png" />
        TRAVEL<span class="small">log</span>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        {username && (
          <>
            <a onClick={logout}>Logout</a>
            <Link to="/create">
              <span className="new-post">Create new post</span>
            </Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
