import tw from "tailwind.macro"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React, { useState } from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const navItems = [
  { name: `Home`, link: `/` },
  { name: `Journal`, link: `/journal` },
  { name: `Speaking`, link: `/speaking` },
  { name: `Interviews`, link: `/interviews` },
]

const NavMenu = styled.div`
  display: ${props => (props.open ? `flex` : `none`)};
`

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
          <Link to="/" rel="home" title="Paulo Elias">
            <Img
              fluid={data.logoImage.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt="Paulo Elias Headshot"
              css={css`
                ${tw`rounded-full w-16 sm:w-16 md:w-20`}
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
          <button
            type="button"
            css={css`
              ${tw`block hover:text-blue-400 focus:text-blue-400 focus:outline-none`}
            `}
            open={open}
            onClick={() => setOpen(!open)}
          >
            <svg
              css={css`
                ${tw`h-8 w-8 fill-current`}
              `}
              viewBox="0 0 24 24"
            >
              {!open ? (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
            </svg>
          </button>
        </div>
        <NavMenu
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
        </NavMenu>
      </div>
      <NavMenu
        open={open}
        css={css`
          ${tw`flex-col items-center h-screen absolute inset-0 px-2 py-3 bg-blue-900 md:hidden`}
        `}
      >
        <nav
          css={css`
            ${tw`mt-20`}
          `}
        >
          {navItems.map((item, i) => (
            <Link
              to={item.link}
              key={i}
              css={css`
                ${tw`mt-6 md:mt-8 lg:mt-10 xl:mt-12 block font-serif font-hairline text-5xl text-blue-100 hover:text-blue-500 hover:underline`}
              `}
              onClick={() => setOpen(!open)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </NavMenu>
    </header>
  )
}
