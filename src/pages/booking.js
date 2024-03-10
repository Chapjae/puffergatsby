// import React from 'react';
// import Layout from '../components/Layout';
// import { GatsbyImage } from 'gatsby-plugin-image';
// import { useStaticQuery, graphql } from 'gatsby';
// import '../styles/global.css';

// const Booking = () => {
//   return (
//     <Layout>
//       <h1 class='text-4xl'>Choose a Room</h1>
//       <div className='bg-white'>
//         <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
//           <div className='mt-6 overflow-x-auto'>
//             {data.allFile.edges.map(({ node }, index) => (
//               <div key={index} className='inline-block mr-4 max-w-xs'>
//                 <div className='group relative'>
//                   <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
//                     {node.name}
//                   </h2>
//                   <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
//                     <GatsbyImage
//                       image={node.childImageSharp.gatsbyImageData}
//                       alt={`Room ${index + 1}`}
//                       className='h-full w-full object-cover object-center lg:h-full lg:w-full rounded-md'
//                     />
//                   </div>
//                   <div className='mt-2 mb-6 flex justify-between'>
//                     <div>
//                       <h3 className='text-2xl text-gray-700'>
//                         <a href={`/booking/${node.name}`}>
//                           <span
//                             aria-hidden='true'
//                             className='absolute inset-0'></span>
//                           Price per Night
//                         </a>
//                       </h3>
//                     </div>
//                     <p className='text-2xl font-medium text-gray-900'>$35</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export const data = useStaticQuery(graphql`
//   query RoomImages {
//     allFile(filter: { relativeDirectory: { eq: "rooms" } }) {
//       edges {
//         node {
//           childImageSharp {
//             gatsbyImageData(
//               layout: FIXED
//               height: 350
//               width: 300
//               placeholder: BLURRED
//               formats: [AUTO, WEBP]
//             )
//           }
//           name
//         }
//       }
//     }
//   }
// `);

// export default Booking;

// // const Booking = ({ data }) => {
// //   let post = data.markdownRemark;

// //   let featuredImg = getImage(
// //     post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData,
// //   );

// //   return (
// //     <main>
// //       <h1>{post.frontmatter.title}</h1>
// //       <GatsbyImage image={featuredImg} />
// //       <div dangerouslySetInnerHTML={{ __html: post.html }} />
// //     </main>
// //   );
// // };

// // export const query = graphql`
// //   query PostQuery($id: String) {
// //     markdownRemark(id: { eq: $id }) {
// //       html
// //       frontmatter {
// //         roomName
// //         featuredImage {
// //           childImageSharp {
// //             gatsbyImageData(width: 800)
// //           }
// //         }
// //       }
// //     }
// //   }
// // `;

// // export default Booking;
