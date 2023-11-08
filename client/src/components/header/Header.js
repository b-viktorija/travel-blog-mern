import { useEffect } from "react"
import { Link } from "react-router-dom"
import './header.css'

function Header() {
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    })
  }, [])
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
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  )
}

export default Header
