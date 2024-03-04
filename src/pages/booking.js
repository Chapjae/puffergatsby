import React from 'react';
import Layout from '../components/Layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import '../styles/global.css';

const Booking = () => {
  const data = useStaticQuery(graphql`
    query RoomImages {
      allFile(filter: { relativeDirectory: { eq: "rooms" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                height: 350
                width: 300
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
            name
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <h1 class='text-4xl'>Choose a Room</h1>
      {/* <div>
        {data.allFile.edges.map(({ node }, index) => (
          <GatsbyImage
            key={index}
            image={node.childImageSharp.gatsbyImageData}
            alt={`Room ${index + 1}`}
          />
        ))}
      </div> */}
      {/* {data.allFile.edges.map(({ node }, index) => (
        <div class='bg-white'>
          <div class='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
            <h2 class='text-2xl font-bold tracking-tight text-gray-900'>
              {node.name}
            </h2>

            <div class='mt-6 overflow-x-auto whitespace-nowrap'>
              <div class='group relative'>
                <div class='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                  <GatsbyImage
                    key={index}
                    image={node.childImageSharp.gatsbyImageData}
                    alt={`Room ${index + 1}`}
                    className='h-full w-full object-cover object-center lg:h-full lg:w-full rounded-md'
                  />
                </div>
                <div class='mt-4 flex justify-between'>
                  <div>
                    <h3 class='text-sm text-gray-700'>
                      <a href={`/${node.name}`}>
                        <span
                          aria-hidden='true'
                          class='absolute inset-0'></span>
                        Price per Night:
                      </a>
                    </h3>
                  </div>
                  <p class='text-sm font-medium text-gray-900'>$35</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))} */}
      <div class='bg-white'>
        <div class='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
          <div class='mt-6 overflow-x-auto'>
            {data.allFile.edges.map(({ node }, index) => (
              <div key={index} class='inline-block mr-4 max-w-xs'>
                <div class='group relative'>
                  <h2 class='text-2xl font-bold tracking-tight text-gray-900'>
                    {node.name}
                  </h2>
                  <a href={`/${node.name}`} class='block'>
                    <div class='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                      <GatsbyImage
                        image={node.childImageSharp.gatsbyImageData}
                        alt={`Room ${index + 1}`}
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full rounded-md'
                      />
                    </div>
                  </a>
                  <div class='mt-2 mb-6 flex justify-between'>
                    <div>
                      <h3 class='text-2xl text-gray-700'>
                        <a href='#'>
                          <span
                            aria-hidden='true'
                            class='absolute inset-0'></span>
                          Price per Night
                        </a>
                      </h3>
                    </div>
                    <p class='text-2xl font-medium text-gray-900'>$35</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
