import React from 'react';
import Head from 'next/head'

const HeadLayout = ({ title, descripotion }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name="description" content={descripotion} />
      <meta property='og:descriptipn' content={descripotion} />
      <link rel="icon" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />
    </Head>
  );
};

export default HeadLayout;