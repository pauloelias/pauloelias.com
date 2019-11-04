import React from "react"
import Obfuscate from "react-obfuscate"

import SEO from "../components/seo"
import { Text } from "../components/ui/text"

export default () => (
  <>
    <SEO title="Hello, I'm Paulo Elias" />
    <div>
      <Text type="intro">
        Hello! I'm Paulo Elias, a Tech Lead and Product Engineer from sunny
        California. I love to build web + mobile products, I enjoy devops, and I
        get really jazzed up thinking deeply about building amazing digital
        products.
      </Text>
      <Text type="intro" padding>
        I've been fortunate enough to work on products that have been nominated
        for Webby Awards, I have worked on products that have won Webby Awards,
        and I have delivered features that have positively impacted business,
        growth, and marketing metrics.
      </Text>
      <Text type="intro" padding>
        I’m currently open to interesting opportunites and I love to talk shop.
        Feel free to{" "}
        <Obfuscate
          email="paulo@pauloelias.com"
          headers={{ subject: "Howdy!" }}
          aria-label="Email Me"
        >
          contact me
        </Obfuscate>{" "}
        to jam together.
      </Text>
    </div>
  </>
)
