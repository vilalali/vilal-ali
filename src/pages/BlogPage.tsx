import Navbar from '../components/Navbar';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-transparent text-text font-sans relative flex flex-col">
      <Navbar />
      <main className="pt-20 flex-grow"><Blog /></main>
      <Footer />
    </div>
  );
}
