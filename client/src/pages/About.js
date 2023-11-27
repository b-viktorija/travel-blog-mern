import { Container, Row, Col } from "react-bootstrap"

function About() {
  return (
    <Container className="p-4">
      <Row>
        <Col md={6} className="d-flex align-items-center"> 
          <img
            src="https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_600/waunaxzgmyu3sbjxk8jx"
            alt="About Me"
            className="img-fluid mx-auto"
            style={{ width: "60%", height: "auto" }}
          />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h1 className="text-center m-4">About Me!</h1>
            <div className="text-center ">
              <p>
                🌍 Hello, everyone! I'm Jane Doe, your guide through thrilling
                adventures across Europe and Australia! From the romantic
                streets of Paris 🇫🇷 to the adrenaline-pumping Swiss Alps 🏔️,
                join me on a whirlwind journey!
              </p>
              <p>
                🏛️ Roaming the historic Colosseum in Rome and savoring the
                delights of Italian pasta – magnifico! Next stop, Iceland 🌌,
                where I marveled at Gullfoss waterfall and relaxed in geothermal
                springs.
              </p>
              <p>
              🐠 Australia's Great Barrier Reef offered a vibrant underwater
              spectacle. Snorkeling in a kaleidoscope of colors was pure magic!
              New Zealand 🇳🇿, with its fjords and bungee jumping, was an
              adrenaline rush!
              <p />
              <p>
              🏛️ Athens 🇬🇷 whispered tales of gods at the Acropolis. Now, buckle
              up as we embark on a rollercoaster of global exploration! 🚀✈️
              </p>
            </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About
