import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function Photos({ data }) {
  const photos = data.allFile.nodes;
  console.log(photos);

  return (
    <Layout>
      <div className='columns-3 gap-x-.2'>
        {photos.map((photo, index) => (
          <div className='mb-6 h-full w-full rounded-full'>
            <img
              src={photo.childrenImageSharp[0].fixed.src}
              alt={`${index + 1}`}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      nodes {
        childrenImageSharp {
          fixed {
            src
          }
        }
      }
    }
  }
`;
