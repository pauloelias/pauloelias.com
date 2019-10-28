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
  <footer
    css={css`
      ${tw`px-4 p-6 border-t border-gray-200 text-gray-500 md:border-gray-400`}
    `}
  >
    <div
      css={css`
        ${tw`flex flex-col items-center justify-center md:flex-row md:justify-start`}
      `}
    >
      <div
        css={css`
          ${tw`flex items-center order-2 mt-3 md:mt-0 md:mr-4 md:order-none`}
        `}
      >
        &copy; {new Date().getFullYear()} Paulo Elias.
      </div>
      <div
        css={css`
          ${tw`flex items-center order-1 md:order-none`}
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
              ${tw`mr-2 text-xl text-gray-600 hover:text-blue-900`}
            `}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
)
