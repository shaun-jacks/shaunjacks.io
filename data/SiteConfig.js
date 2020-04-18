const config = {
  siteTitle: "Shaun Jackson", // Site title.
  siteTitleShort: "shaunjacks.io", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Shaunn Jackson Blog", // Alternative site title for SEO.
  siteLogo: "", // Logo used for SEO and manifest.
  siteUrl: "https://shaunjacks.com/", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "A GatsbyJS stater with Advanced design in mind and with theme-ui", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Shaun Jackson", // Username to display in the author segment.
  userEmail: "shaun@shaunjacks.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Newport Beach, CA", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "Just a software engineer trying to mesh art and engineering", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  avatar: {
    description:
      "As a curious soul, I value continual learning. I am passionate about software engineering and data science, where technology meets creativity and design to solve real world problems through collaboration.",
    photo:
      "https://shaunjacks.com/static/426d80516a46be4949bdfd16faafdcb3/b9d37/shaun-coffee-zoom.png"
  },
  userLinks: [
    {
      label: "github",
      url: "https://github.com/shaun-jacks"
    },
    {
      label: "linkedin",
      url: "https://www.linkedin.com/in/shaun-jackson/"
    },
    {
      label: "email",
      url: "mailto:shaun@shaunjacks.com"
    }
  ],
  menuLinks: [
    {
      name: "Me",
      url: "/about"
    },
    {
      name: "Articles",
      url: "/blog"
    }
  ],
  copyright: "Copyright © 2020. Shaun Jackson", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
