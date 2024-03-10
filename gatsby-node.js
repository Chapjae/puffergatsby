const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Rooms {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: '/booking/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/room-details.js'),
      context: { slug: node.frontmatter.slug },
    });
  });
};
