import * as React from 'react';
import { SunIcon, CameraIcon, WifiIcon } from '@heroicons/react/20/solid';
import Welcome from '../images/home/welcome.jpg';
import Layout from '../components/Layout';
import '../styles/global.css';

const features = [
  {
    name: 'We got Sunshine and the beach.',
    description: 'Bring yo sunscreen and a towel.',
    icon: SunIcon,
  },
  {
    name: 'Take pictures of scenic stuff.',
    description: 'Make sure your phone is fully charged',
    icon: CameraIcon,
  },
  {
    name: 'We got wifi too.',
    description:
      'In case you are not actually on vacation and have to work still.',
    icon: WifiIcon,
  },
];

const Home = () => {
  return (
    <Layout>
      <div className='overflow-hidden bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
            <div className='lg:pr-8 lg:pt-4'>
              <div className='lg:max-w-lg'>
                <h2 className='text-base font-semibold leading-7 text-indigo-600'>
                  Your vacation is a click away!
                </h2>
                <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  Welcome to Puffer Isle Inn!
                </p>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  Puffer Isle is the bestest resort in Ding-ling-dong
                  Phillipines
                </p>
                <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                  {features.map((feature) => (
                    <div key={feature.name} className='relative pl-9'>
                      <dt className='inline font-semibold text-gray-900'>
                        <feature.icon
                          className='absolute left-1 top-1 h-5 w-5 text-indigo-600'
                          aria-hidden='true'
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className='inline'>{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src={Welcome}
              alt='Product screenshot'
              className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const Head = () => <title>Puffer Isle Inn</title>;
