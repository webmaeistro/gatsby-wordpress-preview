module.exports = {
  siteMetadata: {
    title: `WordPress + Gatsby + Preview`,
    author: `Martin Andersen`,
    description: `A starter for WordPress + Gatsby that supports live previews.`,
    siteUrl: `/`,
    social: {
      twitter: `@webmaeistro`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql-universal',
      options: {
        typeName: 'WPGraphQL',
        fieldName: 'wpgraphql',
        url: `http://localhost:3030/graphql`,
      },
    },
  ],
};
