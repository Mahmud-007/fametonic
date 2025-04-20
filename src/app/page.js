import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Fametonic - Turn Social Media Into Your Dream Career</title>
        <meta name="description" content="Discover your potential with Fametonic and turn your social media presence into a profitable career." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}