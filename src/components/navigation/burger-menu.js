import tw from "tailwind.macro"
import { Global, css } from "@emotion/core"
import React from "react"

import NavItems from "./nav-items"

export default ({ handleClick, linkStyles, open, navItems, wrapperStyles }) => (
  <div
    css={css`
      ${open ? tw`block` : tw`hidden`}
    `}
  >
    <Global
      styles={css`
        html,
        body {
          ${open ? tw`overflow-y-hidden` : tw`overflow-y-visible`}
        }
      `}
    />
    <NavItems
      navItems={navItems}
      wrapperStyles={wrapperStyles}
      linkStyles={linkStyles}
      open={open}
      handleClick={handleClick}
    />
  </div>
)
