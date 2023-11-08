import './footer.css'

const currentDate = new Date()
const year = currentDate.getFullYear()

function Footer(W) {
  return (
    <footer>
      <p>Copyright {year}</p>
    </footer>
  )
}

export default Footer