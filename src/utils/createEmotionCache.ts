import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

export default function createEmotionCache() {
  let insertionPoint: HTMLElement | undefined;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector(
      'meta[name="emotion-insertion-point"]',
    ) as HTMLElement;
    insertionPoint = emotionInsertionPoint;
  }
  return createCache({ key: 'mui-style', insertionPoint });
}
