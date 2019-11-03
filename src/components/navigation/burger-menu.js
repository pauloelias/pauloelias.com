import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"

import NavItems from "./nav-items"

export default ({ handleClick, linkStyles, open, navItems, wrapperStyles }) => (
  <div
    css={css`
      ${!open ? tw`hidden` : tw`block`}
    `}
  >
    <NavItems
      navItems={navItems}
      wrapperStyles={wrapperStyles}
      linkStyles={linkStyles}
      open={open}
      handleClick={handleClick}
    />
  </div>
)
