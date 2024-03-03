import * as React from 'react';
import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <h1>About the Area</h1>
        <p>
          Here's some info about the stuff you can see that surrounds Puffer
          Isle Inn
        </p>
      </main>
    </Layout>
  );
};
export const Head = () => <title>About</title>;

export default AboutPage;
