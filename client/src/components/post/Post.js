import { Col } from "react-bootstrap"
import "./post.css"
import { formatISO9075 } from "date-fns"
import { Link } from "react-router-dom"

function Post({ _id, title, summary, cover, content, createdAt }) {
  return (
    <Col sm={12} md={6} lg={4}>
      <Link style={{ textDecoration: "none" }} to={`/post/${_id}`}>
        <div className="post p-4 m-4">
          <div className="image">
            <img
              className="travel-img"
              src={"http://localhost:4000/" + cover}
              alt=""
            />
          </div>
          <div className="content">
            <h2>{title} </h2>
            <p className="info">
              <a className="author" href="https://github.com/b-viktorija">
                Jane Doe
              </a>
              <time>{formatISO9075(new Date(createdAt))}</time>
            </p>
            <p className="summary">{summary}</p>
          </div>
        </div>
      </Link>
    </Col>
  )
}

export default Post
