
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import 'react-calendar/dist/Calendar.css';
import "@fortawesome/fontawesome-free/css/all.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'nprogress/nprogress.css';

import '../styles/scrollbar.css'
import '../styles/footer.css'
import '../styles/calendar.css'

import Router from 'next/router';

import type { AppProps } from 'next/app'
import Layout from '../layouts/index'
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}
export default MyApp
