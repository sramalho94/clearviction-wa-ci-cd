import '@src/styles/global.css';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import InterceptSurveyForm from '@src/components/functional/InterceptSurveyForm.tsx';
import Footer from '@src/components/layout/Footer.tsx';
import Header from '@src/components/layout/Header.tsx';
import theme from '@src/styles/themes/theme.tsx';
import createEmotionCache from '@src/utils/createEmotionCache.ts';
import Head from 'next/head';
import React from 'react';

const clientSideEmotionCache = createEmotionCache();

interface AppProps {
  Component: React.ComponentType
  emotionCache?: EmotionCache
  pageProps: any
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <InterceptSurveyForm>
          <>
            <CssBaseline />
            <Header />
            <Component {...pageProps} />
            <Footer />
          </>
        </InterceptSurveyForm>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
