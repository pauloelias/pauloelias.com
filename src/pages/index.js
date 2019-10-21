import tw from "tailwind.macro"
import React from "react"
import SEO from "../components/seo"

const Heading = tw.h1`
  text-2xl
`

export default () => (
  <>
    <SEO />
    <Heading>Hello, world!</Heading>
  </>
)
