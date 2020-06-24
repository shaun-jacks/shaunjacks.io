const postQuery = `{
  posts: allMdx(
    filter: { 
      frontmatter: { publish: { eq: "yes" } }
      fileAbsolutePath: { regex: "/posts/" } 
    }
  ) {
    edges {
      node {
        fields {
          slug
          date(formatString: "MMMM Do, YYYY")
        }
        objectID: id
        frontmatter {
          title
          tags
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;
const flatten = (arr) =>
  arr.map(({ node: { frontmatter, fields, ...rest } }) => ({
    ...frontmatter,
    ...fields,
    ...rest,
  }));
const settings = { attributesToSnippet: [`excerpt:20`] };
const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
    settings,
  },
];

module.exports = queries;
