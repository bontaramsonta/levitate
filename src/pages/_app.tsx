import { type AppType } from 'next/app';
import { api } from '../utils/api';
import '../styles/globals.css';
import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
};

export default api.withTRPC(MyApp);
