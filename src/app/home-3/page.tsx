import Topbar from '@/component/layout/Topbar/page';
import React from 'react';
import Hero from './Hero';
import Welcome from '@/component/Welcome';
import Portfolio from '@/component/Portfolio';
import Client from '@/component/Client';
import Pricing from '@/component/Pricing';
import Team from '@/component/Team';
import Cta from '@/component/Cta';
import Blog from '@/component/Blog';
import Contact from '@/component/Contact';
import Footer from '@/component/layout/Footer/page';

const Page = () => {
  return (
    <>
      <Topbar />
      <Hero />
      <Welcome />
      <Portfolio />
      <Client />
      <Pricing />
      <Team />
      <Cta />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
