import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import "./header.css"
import { UserContext } from "../../userContext"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext)
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo)
      })
    })
  }, [])

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    })
    setUserInfo(null)
  }

  const username = userInfo?.username

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="black"
      data-bs-theme="dark"
      // fixed="top"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="logo">
            <img src="images/globe.png" />
            TRAVEL<span class="small">log</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
            {username && (
              <>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
                <Nav.Link href="/create">
                  <span className="new-post">Create new post</span>
                </Nav.Link>
              </>
            )}
            {!username && (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </>
            )}
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
