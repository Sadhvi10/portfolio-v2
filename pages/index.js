import Head from "next/head";
import Image from "next/image";
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
      {/* Sidebar */}
      <Sidebar />
      {/* Article */}
      {/* Footer */}
    </div>
  );
}
