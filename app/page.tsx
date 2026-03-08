import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Works } from '@/components/works';
import { About } from '@/components/about';
import { Focus } from '@/components/focus';
import { Awards } from '@/components/awards';
import { Blog } from '@/components/blog';
import { Clients } from '@/components/clients';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Works />
      <About />
      <Blog />
      <Footer />
    </>
  );
}
