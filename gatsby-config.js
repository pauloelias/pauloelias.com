const config = require("./config/site")

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    keywords: ["Product Engineer", "React", "JAMstack", "GraphQL", "CraftCMS"],
    author: {
      name: config.author,
      byLine: config.minibio,
    },
    organization: {
      name: config.organization,
      url: config.siteUrl,
      logo: config.logo,
    },
    siteUrl: config.siteUrl,
    image: config.logo,
    social: {
      twitter: config.twitterHandle,
      instagram: config.instagramHandle,
      github: config.github,
      fbAppID: config.fbAppID,
    },
  },
  pathPrefix: "/",
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `interviews`,
        path: `${__dirname}/src/content/interviews/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `journal`,
        path: `${__dirname}/src/content/journal/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `speaking`,
        path: `${__dirname}/src/content/speaking/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md", ".markdown"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              backgroundColor: "none",
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              noInlineHighlight: true,
            },
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
