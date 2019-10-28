import tw from "tailwind.macro"
import React from "react"

import Header from "./header"
import Footer from "./footer"

const Container = tw.div`
  mx-auto max-w-full
`

const Layout = ({ children }) => (
  <Container>
    <Header />
    <main>{children}</main>
    <Footer />
  </Container>
)

export default Layout
