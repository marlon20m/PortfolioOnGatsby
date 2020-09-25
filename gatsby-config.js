module.exports = {
  siteMetadata: {
    title: `Portfolio Marlon Mora`,
    name: `Marlon Mora`,
    siteUrl: `https://github.com/marlon20m`,
    description: `I am a Full Stack Web Developer currently enrolled at The University of Texas`,
    hero: {
      heading: `My name is Marlon Mora & I am a Full Stack Web Developer`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/marlon20m`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/giraldo-marlon`,
      },
      {
        name: `dribbble`,
        url: `https://drive.google.com/file/d/1x1JPpQ3mnBu2h8peELWucCYBE7nqQAV7/view?usp=sharing`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        sources: {
          local: true,
          contentful: false
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/letterMFavicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-118232427-3",
      },
    },
  ],
}
