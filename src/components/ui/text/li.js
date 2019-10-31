import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"

export default props => (
  <li
    css={css`
      ${tw`font-serif font-normal text-lg leading-relaxed md:text-xl lg:text-lg`}
    `}
    {...props}
  >
    {props.children}
  </li>
)
