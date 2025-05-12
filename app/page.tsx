// En app/page.tsx
import Navbar from '../components/Navbar';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
      <Experience />
      <Contact />
    </main>
  );
}