import Sidebar from './components/sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ContactForm from './Contactform';

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      
      {/* 1. Left Sidebar (Fixed) */}
      <Sidebar />

      {/* 2. Main Content Area (Scrollable) */}
      <main className="flex-1 h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        <Hero />
        
        <div className="px-6 md:px-12 py-10 max-w-7xl mx-auto">
            <Projects />
        </div>

        <section id="contact" className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Ready to collaborate?</h2>
            <ContactForm />
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;