import { Metadata } from 'next';

const faviconUrl = 'link';
const appMetadata: Metadata = {
  title: 'App',
  description: 'App Description',
  icons: {
    icon: [
      { url: faviconUrl, sizes: '32x32' },
      { url: faviconUrl, sizes: '192x192' },
    ],
    apple: [
      { url: faviconUrl },
    ],
  },
};

export default appMetadata;
