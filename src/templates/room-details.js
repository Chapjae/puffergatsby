import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function RoomDetails() {
  let post = data.markdownRemark;
  let featuredImg = getImage(
    post.frontmatter.featuredImg?.childImageSharp?.gatsbyImageData,
  );

  return (
    <Layout>
      <div>
        <h2>Title</h2>
        <h3>Stack</h3>
        <GatsbyImage image={featuredImg} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}

// export const query = graphql`
//   query PostQuery($id: String) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title
//         featuredImage {
//           childImageSharp {
//             gatsbyImageData(width: 800)
//           }
//         }
//       }
//     }
//   }
// `;
