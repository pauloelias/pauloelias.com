import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Burger from "./burger"
import BurgerMenu from "./burger-menu"

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
                ${tw`w-16 md:w-20`}
              `}
            />
          </Link>
          <h1
            css={css`
              ${tw`ml-2 font-sans text-xl antialiased font-normal tracking-tight sm:ml-3`}
            `}
          >
            <Link to="/">Paulo Elias</Link>
          </h1>
        </div>
        <div
          css={css`
            ${tw`relative z-10 md:hidden`}
          `}
        >
          <Burger open={open} handleClick={() => setOpen(!open)} />
        </div>
        <div
          css={css`
            ${tw`hidden md:block`}
          `}
        >
          <nav>
            {navItems.slice(1).map((item, i) => (
              <Link
                to={item.link}
                key={i}
                css={css`
                  ${tw`ml-6 font-sans text-2xl font-normal tracking-wide capitalize hover:text-blue-600 hover:underline md:ml-10`}
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <BurgerMenu
        open={open}
        navItems={navItems}
        handleClick={() => setOpen(!open)}
      />
    </header>
  )
}
