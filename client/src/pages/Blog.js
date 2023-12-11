import { Col, Container, Row } from "react-bootstrap"
import Post from "../components/post/Post"

function Blog() {
  return (
    <Container className="blog">
      <Row>
        <Col sm={12} md={4}>
          <Post />
        </Col>
        <Col sm={12} md={4}>
          <Post />
        </Col>
        <Col sm={12} md={4}>
          <Post />
        </Col>
      </Row>
    </Container>
  )
}

export default Blog
