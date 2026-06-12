import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-transparent text-text font-sans relative flex flex-col">
      <Navbar />
      <main className="pt-20 flex-grow"><Skills /></main>
      <Footer />
    </div>
  );
}
