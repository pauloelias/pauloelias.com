import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"

import SEO from "../components/seo"

export default ({ data }) => (
  <>
    <SEO title="Hello, I'm Paulo Elias" />
    <div
      css={css`
        ${tw`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans md:font-light text-blue-700`}
      `}
    >
      <p
        css={css`
          ${tw``}
        `}
      >
        Natoque nisl odio mi tristique nulla quis vel varius commodo lacinia
        cras, tellus fames iaculis mollis amet sapien metus vestibulum justo
        class.
      </p>
      <p
        css={css`
          ${tw`mt-6 sm:mt-8 md:mt-10`}
        `}
      >
        Turpis pulvinar felis porttitor molestie magnis lacus vehicula ipsum mi,
        elementum auctor aliquam lobortis urna duis nec pellentesque massa, at
        blandit vivamus facilisi ante dictum ac sodales.
      </p>
      <p
        css={css`
          ${tw`mt-6 sm:mt-8 md:mt-10`}
        `}
      >
        Natoque nisl odio mi tristique nulla quis vel varius commodo lacinia
        cras, tellus fames iaculis mollis amet sapien metus vestibulum justo
        class.
      </p>
    </div>
  </>
)
