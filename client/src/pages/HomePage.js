import Gallery from "../components/Gallery";
import Blog from "./Blog";
import { Container, Row, Col } from "react-bootstrap";

// fix gallery component;
//on click of scroll down button it should take you automatically down to posts; 


function HomePage() {
  return (
    <Container fluid className="p-0">
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
              <button className="lead">Scroll down to start traveling ↓</button>
            </Col>
          </Row>
        </div>
      </div>

      {/* <Gallery /> */}
      <Blog />
    </Container>
  );
}

export default HomePage;
