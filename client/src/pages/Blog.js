import { Container, Row } from "react-bootstrap"
import Post from "../components/post/Post"
import { useEffect, useState } from "react"

function Blog() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts)
      })
    })
  }, [])
  return (
    <Container className="blog">
      <Row>{posts.length > 0 && posts.map((post) => <Post {...post} />)}</Row>
    </Container>
  )
}

export default Blog
