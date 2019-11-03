import React from "react"
import { Link } from "gatsby"

export default ({ wrapperStyles, handleClick, linkStyles, navItems }) => (
  <div css={wrapperStyles}>
    <nav>
      {navItems.map((item, i) => (
        <Link to={item.link} key={i} css={linkStyles} onClick={handleClick}>
          {item.name}
        </Link>
      ))}
    </nav>
  </div>
)
