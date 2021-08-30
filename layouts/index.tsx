import Navbar from "../components/Navbar";
import Head from 'next/head'
import Footer from '../components/Footer'

const DefaultLayout = ({ children }: any) => {

  return <div className="m-0 flex flex-col min-h-screen">
    <Head>
      <title>sandihoiva</title>
      <link href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap" rel="stylesheet" />
    </Head>
    <Navbar />

    <main> {children} </main>
    <div className="spacer flex-1" />
    <Footer />
  </div>
};

export default DefaultLayout;
