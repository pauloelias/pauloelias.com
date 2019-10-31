import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"

export default props => (
  <ul
    css={css`
      ${tw`mt-8 list-disc list-inside lg:mx-auto lg:mt-10 lg:w-2/3`}
      ul {
        ${tw`my-1 mx-0 pl-4 lg:my-2 lg:pl-6 lg:w-auto`}
      }
    `}
    {...props}
  >
    {props.children}
  </ul>
)
