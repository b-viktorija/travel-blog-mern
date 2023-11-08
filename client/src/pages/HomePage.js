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
      </div>
      {/* <Gallery /> */}
      <Blog />
    </div>
  )
}

export default HomePage
