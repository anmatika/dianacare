import Navbar from "../components/Navbar";
import Head from 'next/head'
import Footer from '../components/Footer'

const DefaultLayout = ({ data, children }: any) => {

  return <div className="m-0 flex flex-col min-h-screen">
    <Head>
      <title>sandihoiva</title>
    </Head>
    <Navbar />

    <main> {children} </main>
    <div className="spacer flex-1" />
    <Footer />
  </div>
};

export default DefaultLayout;
