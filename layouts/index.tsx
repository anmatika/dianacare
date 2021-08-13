import Navbar from "../components/Navbar";
import Head from 'next/head'

const DefaultLayout = ({ children }: any) => (
  <>
    <Head>
      <title>Diana care</title>
    </Head>
    <Navbar />
    <div className="container mx-auto px-4">
      <main> {children} </main>
    </div>
  </>
);

export default DefaultLayout;