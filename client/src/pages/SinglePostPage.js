import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { formatISO9075 } from "date-fns"

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo)
      })
    })
  }, [])

  if (!postInfo) return ""

  const customStyle = {
    backgroundColor: '#d3d3d3ce'
  };

  return (
    <Container className="post-page p-4 m-auto my-4" style={customStyle}>
      <Row className="text-center">
        <h1 className="post-title ">{postInfo.title}</h1>
        <p className="author" href="https://github.com/b-viktorija">
          Author: Jane Doe{" "}
          <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
        </p>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center" lg={6} sm={12}>
          <div className="image">
            <img
              src={`http://localhost:4000/${postInfo.cover}`}
              alt=""
              className="travel-img"
            />
          </div>
        </Col>
        <Col lg={6} sm={12}>
          <div
            className="content m-5 h5"
            dangerouslySetInnerHTML={{ __html: postInfo.content }}
          />
        </Col>
      </Row>
    </Container>
  )
}
