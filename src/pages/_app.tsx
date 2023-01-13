import { type AppType } from 'next/app';
import { api } from '../utils/api';
import '../styles/globals.css';
import { Inter } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
