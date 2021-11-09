import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sadhvi Pugaonkar</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Navbar */}
      <Navbar />

      <div className='bg-[#2d333b] sm:bg-[#22272e] h-screen'>
        {/* Sidebar */}
        <Sidebar />

        {/* Article */}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
