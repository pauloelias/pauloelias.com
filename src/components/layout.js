import tw from "tailwind.macro"
import { Global, css } from "@emotion/core"
import React from "react"

import { Page, Main } from "../components/ui/layout"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <Page>
    <Global
      styles={css`
        html,
        body {
          ${tw`h-screen antialiased`}
        }
      `}
    />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Page>
)

export default Layout
