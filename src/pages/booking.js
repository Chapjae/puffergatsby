import React from 'react';
import Layout from '../components/Layout';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const Booking = () => {
  const data = useStaticQuery(graphql`
    query RoomImages {
      allFile(filter: { relativeDirectory: { eq: "rooms" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <h1>Choose a Room</h1>
      {data.allFile.edges.map(({ node }, index) => (
        <GatsbyImage
          key={index}
          image={node.childImageSharp.gatsbyImageData}
          alt={`Room ${index + 1}`}
        />
      ))}
    </Layout>
  );
};

export default Booking;
