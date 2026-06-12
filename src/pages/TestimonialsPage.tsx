import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-transparent text-text font-sans relative flex flex-col">
      <Navbar />
      <main className="pt-20 flex-grow"><Testimonials /></main>
      <Footer />
    </div>
  );
}
