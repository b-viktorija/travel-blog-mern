import Blog from "./Blog"
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { useRef } from "react"

function HomePage() {
  const ref = useRef(null)
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Container fluid className="p-0">
      {/* Landing page video */}
      <div className="vid-container">
        <video autoPlay muted loop>
          <source src="videos/videoplayback.mp4" type="video/mp4" />
        </video>
        <div className="vid-shadow" />
        <div className="text-container">
          <Row>
            <Col md={12}>
              <h1 className="">EXPLORE THE WORLD WITH ME!</h1>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h2 className="">Join me on our next adventure!</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <button className="lead" onClick={handleClick}>
                Scroll down to start traveling ↓
              </button>
            </Col>
          </Row>
        </div>
      </div>

      {/* main part */}
      <div ref={ref}>
        <Blog />

        {/* Call for action */}
        <Card className="text-center w-75 m-auto my-4 p-2" id="card">
          <Card.Body>
            <Card.Title>Share your own stories!</Card.Title>
            <Card.Text>
              Become part of our team, and tell us more about your own
              adventures!
            </Card.Text>
            <Card.Img
              src="/images/30765-3-travel-photos.png"
              className="w-75 mb-4"
            />
            <div className="d-flex">
              <a href="/login" className="w-100">
                <Button variant="outline-dark" size="lg" className="">
                  Log In
                </Button>
              </a>
              <a href="/register" className="ms-4 w-100">
                <Button variant="dark" size="lg">
                  Register
                </Button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default HomePage
