import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { Link } from "gatsby"

export default props => (
  <div
    css={css`
      ${tw`flex-col items-center h-screen absolute inset-0 px-2 py-3 bg-blue-900 md:hidden`}
      ${props.open ? tw`flex` : tw`hidden`}
    `}
  >
    <nav
      css={css`
        ${tw`mt-20`}
      `}
    >
      {props.navItems.map((item, i) => (
        <Link
          to={item.link}
          key={i}
          css={css`
            ${tw`mt-6 md:mt-8 lg:mt-10 xl:mt-12 block font-serif font-hairline text-5xl text-blue-100 hover:text-blue-500 hover:underline`}
          `}
          onClick={props.handleClick}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  </div>
)
