import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io"

const socialMedia = [
  {
    name: `Github`,
    link: `https://www.github.com/pauloelias/`,
    icon: <IoLogoGithub />,
  },
  {
    name: `Instgram`,
    link: `https://www.instagram.com/pauloelias/`,
    icon: <IoLogoInstagram />,
  },
  {
    name: `Twitter`,
    link: `https://www.twitter.com/pauloelias/`,
    icon: <IoLogoTwitter />,
  },
  {
    name: `LinkedIn`,
    link: `https://www.linkedin.com/in/pauloelias/`,
    icon: <IoLogoLinkedin />,
  },
]

export default () => (
  <footer>
    <div
      css={css`
        ${tw`flex items-center px-4 py-3 pt-6 border-t border-gray-400 text-gray-500`}
      `}
    >
      <div
        css={css`
          ${tw`flex items-center mr-4`}
        `}
      >
        &copy; {new Date().getFullYear()} Paulo Elias.
      </div>
      <div
        css={css`
          ${tw`flex items-center`}
        `}
      >
        {socialMedia.map((item, i) => (
          <a
            href={item.link}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.name} Icon`}
            css={css`
              ${tw`mr-2 text-xl text-gray-600`}
            `}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
)
