import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Burger, BurgerMenu, NavItems } from "./navigation"

const navItems = [
  { name: `Home`, link: `/` },
  { name: `Journal`, link: `/journal` },
  { name: `Speaking`, link: `/speaking` },
  { name: `Interviews`, link: `/interviews` },
]

export default () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logoImage: file(relativePath: { eq: "Elias_Paulo-2604.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 125) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [open, setOpen] = useState(false)

  return (
    <header
      css={css`
        ${tw`px-4 py-6 md:border-b md:border-gray-400`}
      `}
    >
      <div
        css={css`
          ${tw`flex items-center justify-between`}
        `}
      >
        <div
          css={css`
            ${tw`flex items-center`}
          `}
        >
          <Link
            to="/"
            rel="home"
            title="Paulo Elias"
            css={css`
              ${tw`block rounded-full overflow-hidden border-2 border-gray-400 focus:outline-none focus:border-white`}
            `}
          >
            <Img
              fluid={data.logoImage.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt="Paulo Elias Headshot"
              css={css`
                ${tw`w-20 lg:w-24`}
              `}
            />
          </Link>
          <h1
            css={css`
              ${tw`ml-4 font-sans text-2xl antialiased font-semibold tracking-wider md:text-xl md:tracking-wide lg:ml-6 lg:text-2xl`}
            `}
          >
            <Link to="/">Paulo Elias</Link>
          </h1>
        </div>
        <Burger open={open} handleClick={() => setOpen(!open)} />
        <NavItems
          navItems={navItems.slice(1)}
          wrapperStyles={css`
            ${tw`hidden md:block`}
          `}
          linkStyles={css`
            ${tw`ml-6 font-sans text-2xl tracking-wide capitalize font-semibold hover:text-blue-600 hover:underline md:ml-8 md:text-xl lg:ml-10 md:text-2xl`}
          `}
        />
      </div>
      <BurgerMenu
        open={open}
        navItems={navItems}
        handleClick={() => setOpen(!open)}
        wrapperStyles={css`
          ${tw`absolute z-10 flex flex-col items-center h-full inset-0 px-2 py-20 bg-blue-900 md:hidden`}
        `}
        linkStyles={css`
          ${tw`mt-6 block font-serif font-hairline text-5xl text-blue-100 hover:text-blue-500 hover:underline`}
        `}
      />
    </header>
  )
}
