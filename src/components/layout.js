import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div css={css`${tw`mx-auto max-w-full`}`}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
