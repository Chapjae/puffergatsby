import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import '../styles/global.css';

export default function RoomDetails({ data }) {
  console.log(data);
  const { html } = data.markdownRemark;
  const { slug, pricePerNight, featuredImage } =
    data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div className='bg-white'>
        <div className='pt-6'>
          {/* Image gallery */}
          <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
            <div className='aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block'>
              <GatsbyImage
                image={featuredImage.childImageSharp.gatsbyImageData}
                className='h-full w-full object-cover object-center'
              />
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16'>
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              {slug}
            </h1>
          </div>

          {/* Options */}
          <div className='mt-4 lg:row-span-3 lg:mt-0'>
            <h2 className='sr-only'>Room information</h2>
            <p className='text-3xl tracking-tight text-gray-900'>
              {pricePerNight}
            </p>

            <form className='mt-10'>
              <button
                type='submit'
                className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                Book This Room!
              </button>
            </form>
          </div>

          <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
            {/* Description and details */}
            <div>
              <h3 className='sr-only'>Description</h3>

              <div className='space-y-6'>
                <p className='text-base text-gray-900'>{html}</p>
              </div>
            </div>

            <div className='mt-10'>
              <h3 className='text-sm font-medium text-gray-900'>Highlights</h3>

              <div className='mt-4'>
                <ul
                  role='list'
                  className='list-disc space-y-2 pl-4 text-sm'></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <h2 className='product capitalize text-very-dark-blue font-bold text-3xl sm:text-4xl sm:leading-none pb-3'>
          {slug} <span className='block lg:mt-1'></span>
        </h2>
        <p className='text-dark-grayish-blue pb-6 lg:py-7 lg:leading-6'>
          {html}
        </p>
        <div className='amount font-bold flex items-center justify-between lg:flex-col lg:items-start mb-6'>
          <div className='discount-price items-center flex'>
            <div className='price text-3xl'>{pricePerNight}</div>
          </div>
        </div>
        <div className='sm:flex lg:mt-8 w-full'>
          <div className='quantity-container w-full bg-light-grayish-blue rounded-lg h-14 mb-4 flex items-center justify-between px-6 lg:px-3 font-bold sm:mr-3 lg:mr-5 lg:w-1/3'>
            <input
              className='quantity focus:outline-none text-dark-blue bg-light-grayish-blue font-bold flex text-center w-full'
              type='number'
              name='quantity'
              aria-label='quantity number'
            />
          </div>

          <button className='cart w-full h-14 bg-orange rounded-lg lg:rounded-xl mb-2 shadow-orange-shadow shadow-2xl text-white flex items-center justify-center lg:w-3/5 hover:opacity-60'>
            <i className='cursor-pointer text-white text-xl leading-0 pr-3'>
              <ion-icon name='cart-outline'></ion-icon>
            </i>
            Book This Room
          </button>
        </div>
      </div> */}
      {/* <div>
        <h2>{slug}</h2>
        <h3>{pricePerNight}</h3>
        <div>
          <GatsbyImage image={featuredImage.childImageSharp.gatsbyImageData} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div> */}
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
