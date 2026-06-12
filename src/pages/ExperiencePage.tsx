import Navbar from '../components/Navbar';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-transparent text-text font-sans relative flex flex-col">
      <Navbar />
      <main className="pt-20 flex-grow"><Experience /></main>
      <Footer />
    </div>
  );
}
