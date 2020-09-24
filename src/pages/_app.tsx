import React from 'react';

import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyles from '../styles/global';
import { PaletteProvider } from '../hooks/palette';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Tons</title>
      </Head>

      <PaletteProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </PaletteProvider>
    </>
  );
};

export default MyApp;
