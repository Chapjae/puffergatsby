import React from 'react';
import Layout from '../components/Layout';
import Pool from '../images/area/pufferpool.mp4';
import Foose from '../images/area/fooseball.mp4';
// import Video from '../components/Video';
// import { GatsbyImage } from 'gatsby-plugin-image';

export default function Area() {
  const handleOnMouseEnter = (e) => {
    e.currentTarget.play();
  };

  const handleOnMouseLeave = (e) => {
    e.target.pause();
    e.currentTarget.currentTime = 0;
  };
  return (
    <>
      <Layout>
        <div className='col-3'>
          <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
            {/* <Video videoSrcUrl={Pool} videoTitle='Puffer Swimming Pool' /> */}
            <video
              loop
              preload='auto'
              muted
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}>
              <source src={Pool} type='video/mp4' />
            </video>
            <div className='flex flex-col justify-between p-4 leading-normal'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                We got a pool Baby!
              </h5>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                Cleanest Pool in all ding-la-dong!
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
            {/* <Video videoSrcUrl={Pool} videoTitle='Puffer Swimming Pool' /> */}
            <video
              loop
              preload='auto'
              muted
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}>
              <source src={Foose} type='video/mp4' />
            </video>
            <div className='flex flex-col justify-between p-4 leading-normal'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                We got Fooseball!
              </h5>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                Come play fooseball in our Game Lounge Bobby Bouche!
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
