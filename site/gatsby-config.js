/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: `WordPress-docker-image  Gatsbyjs with preview`,
    author: `Martin Andersen`,
    description: `A Gatsby WordPress site special love for Netlify`,
    siteUrl: `https://gatsby-wordpress-preview.netlify.app`,
    social: {
      twitter: `@webmaeistro`,
    },
    postPrefix : '/blog',
    pagePrefix: '',
  },
  plugins: [
    '@webmaeistro/gatsby-theme-graphql-wp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
