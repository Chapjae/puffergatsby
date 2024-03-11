import React from 'react';
import Layout from '../../components/Layout';
import '../../styles/global.css';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Fanroom({ data }) {
  const rooms = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
            Choose a Room:
          </h1>

          <div className='mt-6 overflow-x-auto'>
            {rooms.map((room, index) => (
              <Link to={'/booking/' + room.frontmatter.slug} key={room.id}>
                <div key={index} className='inline-block mr-4 max-w-xs'>
                  <div className='group relative'>
                    <h2 className='text-2xl tracking-tight text-gray-900'>
                      {room.frontmatter.slug}
                    </h2>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                      <GatsbyImage
                        image={
                          room.frontmatter.featuredImage.childImageSharp
                            .gatsbyImageData
                        }
                        alt={`Room ${index + 1}`}
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full rounded-md'
                        style={{ position: 'relative', zindex: '1' }}
                      />
                    </div>
                    <div className='mt-2 mb-6 flex justify-between'>
                      <div>
                        <h3 className='text-2xl text-gray-700'>
                          <span
                            aria-hidden='true'
                            className='absolute inset-0'></span>
                          Price per Night
                        </h3>
                      </div>
                      <p className='text-2xl font-medium text-gray-900'>
                        {room.frontmatter.pricePerNight}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Rooms {
    allMarkdownRemark {
      nodes {
        frontmatter {
          pricePerNight
          slug
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
