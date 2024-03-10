const path = require('path');

exports.createPage = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Rooms {
      allMarkdownRemark {
        nodes
        frontmatter {
          roomName
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: '/projects/' + node.frontmatter.roomName,
      component: path.resolve('./src/templates/room-details.js'),
      context: { roomName: node.frontmatter.roomName },
    });
  });
};
