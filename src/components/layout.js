import tw from "tailwind.macro"
import { Global, css } from "@emotion/core"
import React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div
    css={css`
      ${tw`flex flex-col mx-auto max-w-5xl px-2 md:px-8`}
    `}
  >
    <Global
      styles={css`
        html,
        body {
          ${tw`h-screen antialiased`}
        }
      `}
    />
    <Header />
    <main
      css={css`
        ${tw`flex-1 px-4 py-6 md:py-10 lg:py-16`}
      `}
    >
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
