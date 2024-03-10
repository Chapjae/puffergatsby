import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import '../styles/global.css';

export default function RoomDetails({ data }) {
  const { html } = data.markdownRemark;
  const { slug, pricePerNight, featuredImage } =
    data.markdownRemark.frontmatter;
  console.log(data);
  return (
    <Layout>
      <div>
        <h2>{slug}</h2>
        <h3>{pricePerNight}</h3>
        <div>
          <GatsbyImage image={featuredImage.childImageSharp.gatsbyImageData} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query RoomDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        pricePerNight
        slug
      }
    }
  }
`;
