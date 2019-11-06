import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import Obfuscate from "react-obfuscate"

import SEO from "../components/seo"
import { Text } from "../components/ui/text"

export default () => (
  <>
    <SEO title="Technical Lead and Product Engineer" />
    <div>
      <Text type="intro">
        Hello! I'm Paulo Elias, a Tech Lead and Product Engineer at{" "}
        <a
          href="https://www.ideo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IDEO
        </a>{" "}
        where I provide technical leadership, technical product ownership, and
        strategy to IDEO's Global Brand Team. I also get to roll my sleeves up
        and help build our global digital products.
      </Text>
      <Text type="intro" padding>
        During my time at IDEO I've worked on Webby Award nominatated + Webby
        Award winning projects. But, while awards are "cool," I have delivered
        products and features that have positively impacted business, growth,
        and marketing initiatives.
      </Text>
      <Text type="intro" padding>
        I’m currently open to interesting opportunities and I love talking shop.
        Feel free to
        <br
          css={css`
            ${tw`hidden lg:inline`}
          `}
        />{" "}
        <Obfuscate
          email="paulo@pauloelias.com"
          headers={{ subject: "Howdy!" }}
          aria-label="Email Me"
        >
          contact me
        </Obfuscate>{" "}
        so we can chat!
      </Text>
    </div>
  </>
)
