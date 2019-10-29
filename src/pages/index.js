import React from "react"

import SEO from "../components/seo"
import { Text } from "../components/ui/text"

export default () => (
  <>
    <SEO title="Hello, I'm Paulo Elias" />
    <div>
      <Text type="intro">
        Natoque nisl odio mi tristique nulla quis vel varius commodo lacinia
        cras, tellus fames iaculis mollis amet sapien metus vestibulum justo
        class.
      </Text>
      <Text type="intro" padding>
        Turpis pulvinar felis porttitor molestie magnis lacus vehicula ipsum mi,
        elementum auctor aliquam lobortis urna duis nec pellentesque massa, at
        blandit vivamus facilisi ante dictum ac sodales.
      </Text>
      <Text type="intro" padding>
        Natoque nisl odio mi tristique nulla quis vel varius commodo lacinia
        cras, tellus fames iaculis mollis amet sapien metus vestibulum justo
        class.
      </Text>
    </div>
  </>
)
