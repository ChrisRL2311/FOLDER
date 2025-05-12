'use client';

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center gap-8">
        <button 
          onClick={() => scrollTo('about')} 
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Acerca De
        </button>
        <button 
          onClick={() => scrollTo('experience')}
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Experiencia
        </button>
        <button 
          onClick={() => scrollTo('contact')}
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Contacto
        </button>
      </div>
    </nav>
  );
}