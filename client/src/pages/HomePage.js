import Gallery from "../components/Gallery"
import Blog from "./Blog"

function HomePage() {
  return (
    <div>
      <div className="vid-container">
        <video autoPlay muted loop>
          <source src="videos/videoplayback.mp4" type="video/mp4" />
        </video>
        <div className="vid-shadow" />
        <div className="text-container">
          <h1>EXPLORE THE WORLD WITH ME!</h1>
          <h2>Join me on our next adventure!</h2>
          <p>Scroll down to start traveling ↓</p>
        </div>
      </div>

    {/* <Gallery /> */}
      <Blog />
    </div>
  )
}

export default HomePage
