import Navbar from "../components/Navbar";
import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'

import Hero from '../components/Hero'
import HeroAbout from "../components/HeroAbout";

const DefaultLayout = ({ children }: any) => {
  const router = useRouter();

  return <div className="m-0 flex flex-col min-h-screen">
    <Head>
      <title>dianacare</title>
    </Head>
    <Navbar />

    {router.pathname === '/' && <Hero />}
    {router.pathname === '/ourvalues' && <HeroAbout />}

    <div className="container mx-auto">
      <main> {children} </main>
    </div>
    <div className="spacer flex-1" />
    <Footer />
  </div>
};

export default DefaultLayout;