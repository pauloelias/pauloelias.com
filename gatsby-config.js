module.exports = {
  siteMetadata: {
    title: `Technical leadership, product ownership, and product engineering.`,
    description: `Paulo Elias is a technical lead, senior engineer, and a very subpar designer. He loves to talk shop about modern web + mobile devcelopment, teaching folks new tools and techniques, and enjoys public speaking.`,
    author: {
      name: `Paulo Elias`,
      byLine: `Per libero elit sollicitudin taciti faucibus metus natoque sapien viverra et, lorem est phasellus nam nisl litora erat interdum auctor, aptent ultricies pulvinar mi dis varius nascetur dictum fusce.`,
    },
    organization: {
      name: "Paulo Elias",
      url: "https://lengstorf.com",
      logo: "https://lengstorf.com/android-chrome-512x512.png",
    },
    siteUrl: "https://www.pauloelias.com",
    image: "",
    social: {
      twitter: "@pauloelias",
      instagram: "@pauloelias",
      github: "@pauloelias",
      fbAppID: "",
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
