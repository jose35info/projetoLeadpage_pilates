import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Instructors from '@/components/Instructors';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Instructors />
      <Services />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
