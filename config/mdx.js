import React from "react"

import { Heading, Text, Blockquote, Ul, Li } from "../src/components/ui/text"

export default {
  h1: props => <Heading level="h1">{props.children}</Heading>,
  h2: props => <Heading level="h2">{props.children}</Heading>,
  h3: props => <Heading level="h3">{props.children}</Heading>,
  h4: props => <Heading level="h4">{props.children}</Heading>,
  h5: props => <Heading level="h5">{props.children}</Heading>,
  h6: props => <Heading level="h6">{props.children}</Heading>,
  p: props => <Text type="body">{props.children}</Text>,
  blockquote: props => <Blockquote>{props.children}</Blockquote>,
  ul: props => <Ul>{props.children}</Ul>,
  li: props => <Li>{props.children}</Li>,
}
