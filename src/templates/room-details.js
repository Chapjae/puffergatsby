import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import '../styles/global.css';
import Trip from '../images/logos/tripadvisorbutton.jpg';
import Booking from '../images/logos/booking.png';
import Airbnb from '../images/logos/airbnb.png';

export default function RoomDetails({ data }) {
  // const [count, setCount] = useState(0);
  const { html } = data.markdownRemark;
  const { slug, pricePerNight, featuredImage, images, highlights } =
    data.markdownRemark.frontmatter;

  let layout;

  switch (true) {
    case !images || images.length === 0:
      layout = (
        <div className='bg-white'>
          <div className='pt-6'>
            <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
              <div className='aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block'>
                <GatsbyImage
                  image={featuredImage.childImageSharp.gatsbyImageData}
                  className='h-full w-full object-cover object-center'
                />
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
                  {pricePerNight} per Night
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
                    <p
                      className='text-base text-gray-900'
                      dangerouslySetInnerHTML={{ __html: html }}></p>
                  </div>
                </div>

                <div className='mt-10'>
                  <h3 className='text-sm font-medium text-gray-900'>
                    Highlights
                  </h3>

                  <div className='mt-4'>
                    <ul className='list-disc space-y-2 pl-4 text-sm'>
                      {highlights.map((highlight) => (
                        <li key={highlight} className='text-gray-400'>
                          <span className='text-gray-600'>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case images.length === 1:
      layout = (
        <div className='bg-white'>
          <div className='pt-6'>
            <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
              <div className='aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block'>
                <GatsbyImage
                  image={featuredImage.childImageSharp.gatsbyImageData}
                  className='h-full w-full object-cover object-center'
                />
              </div>

              <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
                <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
                  <GatsbyImage
                    image={
                      images[0].imageSrc.childrenImageSharp[0].gatsbyImageData
                    }
                    alt={''}
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
                  {pricePerNight} per Night
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
                    <p
                      className='text-base text-gray-900'
                      dangerouslySetInnerHTML={{ __html: html }}></p>
                  </div>
                </div>

                <div className='mt-10'>
                  <h3 className='text-sm font-medium text-gray-900'>
                    Highlights
                  </h3>

                  <div className='mt-4'>
                    <ul className='list-disc space-y-2 pl-4 text-sm'>
                      {highlights.map((highlight) => (
                        <li key={highlight} className='text-gray-400'>
                          <span className='text-gray-600'>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case images.length === 2:
      layout = (
        <div className='bg-white'>
          <div className='pt-6'>
            <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
              <div className='aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block'>
                <GatsbyImage
                  image={featuredImage.childImageSharp.gatsbyImageData}
                  className='h-full w-full object-cover object-center'
                />
              </div>

              <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
                <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
                  <GatsbyImage
                    image={
                      images[0].imageSrc.childrenImageSharp[0].gatsbyImageData
                    }
                    alt={''}
                    className='h-full w-full object-cover object-center'
                  />
                </div>
                <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
                  <GatsbyImage
                    image={
                      images[1].imageSrc.childrenImageSharp[0].gatsbyImageData
                    }
                    alt={''}
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
                  {pricePerNight} per Night
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
                    <p
                      className='text-base text-gray-900'
                      dangerouslySetInnerHTML={{ __html: html }}></p>
                  </div>
                </div>

                <div className='mt-10'>
                  <h3 className='text-sm font-medium text-gray-900'>
                    Highlights
                  </h3>

                  <div className='mt-4'>
                    <ul className='list-disc space-y-2 pl-4 text-sm'>
                      {highlights.map((highlight) => (
                        <li key={highlight} className='text-gray-400'>
                          <span className='text-gray-600'>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      break;
    default:
      layout = (
        <div className='bg-white'>
          <div className='pt-6'>
            {/* Image gallery */}
            <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
              <div className='aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block'>
                <GatsbyImage
                  image={featuredImage.childImageSharp.gatsbyImageData}
                  className='h-full w-full object-cover object-center'
                />
              </div>

              <div className='lg:grid lg:grid-cols-1 lg:gap-y-8'>
                <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
                  <GatsbyImage
                    image={
                      images[0].imageSrc.childrenImageSharp[0].gatsbyImageData
                    }
                    alt={''}
                    className='h-full w-full object-cover object-center'
                  />
                </div>
                <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
                  <GatsbyImage
                    image={
                      images[1].imageSrc.childrenImageSharp[0].gatsbyImageData
                    }
                    alt={''}
                    className='h-full w-full object-cover object-center'
                  />
                </div>
              </div>
              <div className='aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg'>
                <GatsbyImage
                  image={
                    images[2].imageSrc.childrenImageSharp[0].gatsbyImageData
                  }
                  alt={''}
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
                {pricePerNight} per Night
              </p>

              <div className='mt-10'>
                <div className='sm:flex lg:mt-8 w-full'></div>
                <a href='https://www.tripadvisor.com/Hotel_Review-g4055401-d24093034-Reviews-Puffer_Isle_Inn-Dingalan_Aurora_Province_Central_Luzon_Region_Luzon.html'>
                  <button className='relative mt-10 flex w-full items-center justify-left rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                    <img
                      className='static h-10 rounded-full mr-10'
                      src={Trip}
                      alt='tripadvisor'
                    />
                    Book with Trip Advisor.com
                  </button>
                </a>
                <a href='https://www.airbnb.com/rooms/838597716497615688?source_impression_id=p3_1710810107_vvZgE4nFPga51e%2Ff'>
                  <button className='mt-5 flex w-full items-center justify-left rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                    <img
                      className='h-10 rounded-full mr-10'
                      src={Airbnb}
                      alt='airbnb'
                    />
                    Book with Airbnb.com
                  </button>
                </a>
                <a href='https://www.booking.com/hotel/ph/puffer-isle-resort.en-gb.html?aid=356980&label=gog235jc-1DCAsotAFCEnB1ZmZlci1pc2xlLXJlc29ydEgzWANoiQKIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4ArPH468GwAIB0gIkYmNjYjljM2ItNGUzOS00YTQ1LWExZmUtMTdkMTcxODZkOGIz2AIE4AIB&sid=6bb1421e32425ee7c79a20ca2da67bc3&dist=0&group_adults=2&group_children=0&keep_landing=1&no_rooms=1&sb_price_type=total&type=total&'>
                  <button className='mt-5 flex w-full items-center justify-left rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                    <img
                      className='h-10 rounded-full mr-10'
                      src={Booking}
                      alt='booking'
                    />
                    Book with Booking.com
                  </button>
                </a>
              </div>
            </div>

            <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
              {/* Description and details */}
              <div>
                <h3 className='sr-only'>Description</h3>

                <div className='space-y-6'>
                  <p
                    className='text-base text-gray-900'
                    dangerouslySetInnerHTML={{ __html: html }}></p>
                </div>
              </div>

              <div className='mt-10'>
                <h3 className='text-sm font-medium text-gray-900'>
                  Highlights
                </h3>

                <div className='mt-4'>
                  <ul className='list-disc space-y-2 pl-4 text-sm'>
                    {highlights.map((highlight) => (
                      <li key={highlight} className='text-gray-400'>
                        <span className='text-gray-600'>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }

  return <Layout>{layout}</Layout>;
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
        highlights
        slug
        pricePerNight
        images {
          imageSrc {
            relativePath
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
