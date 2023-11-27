import "./footer.css"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// make footer stick to bottom, leaving no margin if the content doesn't cover the whole screen on smaller viewports; 

const currentDate = new Date()
const year = currentDate.getFullYear()

function Footer() {
  return (
    <footer>
      <Container className="img-container">
        <Row>
          <Col>
            <Image
              className="travel-img"
              src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"
            />
          </Col>
          <Col>
            <Image
              className="travel-img"
              src="https://live.staticflickr.com/65535/51172556839_efb2393670_b.jpg"
            />
          </Col>
          <Col>
            <Image
              className="travel-img"
              src="https://a.cdn-hotels.com/gdcs/production68/d1314/b12f79e7-bcce-4cac-96f8-33f98b9bfb88.jpg"
            />
          </Col>
          <Col>
            <Image
              className="travel-img"
              src="https://www.travelworld.it/wp-content/uploads/2020/07/Hawaii-Magagine-stayhome.jpg"
            />
          </Col>
        </Row>
      </Container>
      <div>
        <p>
          Made by: Viktorija Bosilkovska |<a href="https://github.com/b-viktorija"> Click here to connect!</a>{" "}
        </p>
        <p>© Copyright {year}</p>
      </div>
    </footer>
  )
}

export default Footer
