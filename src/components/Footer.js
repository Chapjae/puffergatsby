import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className='bg-white flex bottom-0 rounded-lg shadow m-4 dark:bg-gray-800'>
        <div className='w-full mx-auto max-w-screen-7xl p-4 md:flex md:items-center md:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            Puffer Isle Resort
          </span>
          <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
            <li>
              <a href='/privacy' className='hover:underline me-4 md:me-6'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='/licensing' className='hover:underline me-4 md:me-6'>
                Licensing
              </a>
            </li>
            <li>
              <a href='/contact' className='hover:underline'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
