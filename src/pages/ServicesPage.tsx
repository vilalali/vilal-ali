import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-transparent text-text font-sans relative flex flex-col">
      <Navbar />
      <main className="pt-20 flex-grow"><Services /></main>
      <Footer />
    </div>
  );
}
