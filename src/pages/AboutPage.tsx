import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-text font-sans relative flex flex-col">
      <Navbar />
      <main className="pt-20 flex-grow"><About /></main>
      <Footer />
    </div>
  );
}
