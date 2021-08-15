
import 'tailwindcss/tailwind.css'
import '../styles/scrollbar.css'
import '../styles/footer.css'
// import '../styles/globals.css'
import "@fortawesome/fontawesome-free/css/all.css"

import type { AppProps } from 'next/app'
import Layout from '../layouts/index'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
export default MyApp
