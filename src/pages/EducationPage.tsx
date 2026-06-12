import Navbar from '../components/Navbar';
import Education from '../components/Education';
import Footer from '../components/Footer';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-transparent text-text font-sans relative flex flex-col">
      <Navbar />
      <main className="pt-20 flex-grow"><Education /></main>
      <Footer />
    </div>
  );
}
