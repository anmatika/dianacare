import Navbar from "../components/Navbar";
import Head from 'next/head'
import { useRouter } from 'next/router'

import Hero from '../components/Hero'

const DefaultLayout = ({ children }: any) => {
  const router = useRouter();

  return <>
    <Head>
      <title>dianacare</title>
    </Head>
    <Navbar />

    {router.pathname === '/' && <Hero />}

    <div className="container mx-auto">
      <main> {children} </main>
    </div>
  </>
};

export default DefaultLayout;