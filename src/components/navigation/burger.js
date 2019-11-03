import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"

export default ({ buttonCSS, handleClick, open }) => (
  <button
    type="button"
    css={css`
      ${tw`relative z-10 block hover:text-gray-400 focus:text-gray-400 focus:outline-none md:hidden`}
      ${open ? tw`text-blue-100` : tw`text-gray-600`}
    `}
    onClick={handleClick}
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
)
