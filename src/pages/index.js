import React from "react"
import Obfuscate from "react-obfuscate"

import SEO from "../components/seo"
import { Text } from "../components/ui/text"

export default () => (
  <>
    <SEO title="Technical Lead and Product Engineer" />
    <div>
      <Text type="intro">
        Hello! I'm Paulo Elias, a Tech Lead and Product Engineer from sunny
        California. I love to build web + mobile products, I enjoy devops, and I
        get really jazzed up thinking deeply about building amazing digital
        products.
      </Text>
      <Text type="intro" padding>
        I've worked on products that have been nominated for Webby Awards
        multiple times + won a Webby Award. While awards are "cool" I have
        delivered features that have positively impacted business, growth, and
        marketing metrics.
      </Text>
      <Text type="intro" padding>
        I’m currently open to interesting opportunities and I love talking shop.
        Feel free to{" "}
        <Obfuscate
          email="paulo@pauloelias.com"
          headers={{ subject: "Howdy!" }}
          aria-label="Email Me"
        >
          contact me
        </Obfuscate>{" "}
        so we can jam together.
      </Text>
    </div>
  </>
)
