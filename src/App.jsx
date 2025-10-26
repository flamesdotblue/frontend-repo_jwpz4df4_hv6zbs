import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 font-inter">
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
