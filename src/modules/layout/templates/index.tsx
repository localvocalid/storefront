import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import React from "react"
import Container from "./container"

const Layout: React.FC = ({ children }) => {
  return (
      <Container maxWidth="1024px">
        <Nav />
          <main className="relative">{children}</main>
        <Footer />
      </Container>
  )
}

export default Layout
