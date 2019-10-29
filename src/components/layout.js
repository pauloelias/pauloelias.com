import tw from "tailwind.macro"
import { Global, css } from "@emotion/core"
import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { Page, Main } from "../components/ui/layout"
import Header from "./header"
import Footer from "./footer"
import { Heading, Text } from "../components/ui/text"

const components = {
  h1: props => <Heading level="h1">{props.children}</Heading>,
  h2: props => <Heading level="h2">{props.children}</Heading>,
  h3: props => <Heading level="h3">{props.children}</Heading>,
  h4: props => <Heading level="h4">{props.children}</Heading>,
  h5: props => <Heading level="h5">{props.children}</Heading>,
  h6: props => <Heading level="h6">{props.children}</Heading>,
  p: props => <Text type="body">{props.children}</Text>,
}

export default ({ children }) => (
  <MDXProvider components={components}>
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
