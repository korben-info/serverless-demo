module.exports = {
  siteMetadata: {
    siteUrl: "https://serverless-demo.korben.workers.dev",
    title: "Korben.info Serverless Demo",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/posts/",
      },
      __key: "posts",
    },
    "gatsby-transformer-remark",
  ],
};
