import "./App.css"
import Post from "./components/Post"

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          MyTravelBlog
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="posts">
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  )
}

export default App
