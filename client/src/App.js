import "./App.css"
import Layout from "./Layout"
import { Route, Routes } from "react-router-dom"
import Blog from "./pages/Blog"
import About from "./pages/About"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { UserContextProvider } from "./userContext"
import CreatePage from "./pages/CreatePage"
import SinglePostPage from "./pages/SinglePostPage"

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/post/:id" element={<SinglePostPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
