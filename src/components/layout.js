import tw from "tailwind.macro"
import { Global, css } from "@emotion/core"
import React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div
    css={css`
      ${tw`flex flex-col mx-auto max-w-full p-4 lg:max-w-4xl xl:max-w-5xl`}
    `}
  >
    <Global
      styles={css`
        html,
        body {
          ${tw`h-screen`}
        }
      `}
    />
    <Header />
    <main
      css={css`
        ${tw`flex-1 px-4 py-3 md:py-6 lg:pt-12`}
      `}
    >
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
