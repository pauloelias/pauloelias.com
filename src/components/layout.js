import component from "../../config/mdx"
import tw from "tailwind.macro"
import { Global, css } from "@emotion/core"
import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { Page, Main } from "../components/ui/layout"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <MDXProvider components={component}>
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
  </MDXProvider>
)
