import { Outlet } from "react-router-dom";
import Header from "./header/Header"
import Footer from "./footer/Footer"

function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout
