import Client from '@/component/Client';
import Contact from '@/component/Contact';
import Cta from '@/component/Cta';
import Footer from '@/component/layout/Footer/page';
import Topbar from '@/component/layout/Topbar/page';
import Portfolio from '@/component/Portfolio';
import Team from '@/component/Team';
import Welcome from '@/component/Welcome';
import VideoSection from '@/component/VideoSection';
import Hero from './components/Hero';

const Page = () => {
  return (
    <>
      <Topbar />
      <Hero />
      <Welcome />
      <Portfolio />
      <VideoSection />
      <Client />
      <Team />
      <Cta />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
