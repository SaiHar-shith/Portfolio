import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-white bg-grid-pattern flex flex-col">
      
      {/* Top Nav - UPDATED LINKS HERE */}
      <nav className="flex justify-between items-center p-8">
        <div className="hidden md:flex gap-8 text-gray-500 font-medium">
          <a href="#projects" className="text-black">Work</a>
          <a href="#" className="hover:text-black transition">About</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </div>
        <div className="flex gap-4 text-sm font-semibold">
          <a 
            href="https://www.linkedin.com/in/sai-harshith-katanguri-385949367" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black"
          >
            LinkedIn ↗
          </a>
          <a 
            href="https://github.com/SaiHar-shith" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black"
          >
            Github ↗
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 mt-10 md:mt-0">
        
        <div className="absolute top-20 left-10 hidden lg:block transform -rotate-12">
          <div className="bg-blue-600 text-white font-black px-4 py-2 text-xl shadow-lg">
            KITS Warangal
          </div>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl leading-tight text-gray-900 max-w-4xl">
          Hello, I’m Sai 
          <span className="inline-block w-16 h-16 md:w-20 md:h-20 mx-3 rounded-2xl overflow-hidden align-middle border-4 border-white shadow-lg transform rotate-3">
            <img src={profileImg} alt="avatar" className="w-full h-full object-cover" />
          </span> 
          Welcome to my portfolio!
        </h1>
        
        <p className="font-serif text-3xl md:text-5xl text-gray-800 mt-6 italic">
          Building intelligence into <br/> scalable web apps.
        </p>

        <div className="relative mt-20 mb-12 flex items-center justify-center gap-4 md:gap-8">
          
          <div className="relative group">
            <div className="font-hand text-xl text-gray-500 absolute -top-8 left-0 transform -rotate-12">previously</div>
            <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shadow-sm z-10 relative">
               <span className="text-2xl">🎓</span>
            </div>
            <div className="font-hand text-sm text-gray-400 absolute -bottom-6 left-2">Student</div>
          </div>

          <div className="w-16 h-0.5 bg-gray-300"></div>

          <div className="font-hand text-2xl md:text-4xl font-bold px-4">
             &lt; Full Stack & ML &gt;
          </div>

          <div className="w-16 h-0.5 bg-gray-300"></div>

          <div className="relative group">
             <div className="font-hand text-xl text-gray-500 absolute -top-8 right-0 transform rotate-12">currently here</div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg text-white z-10 relative">
               <span className="text-2xl">🚀</span>
            </div>
             <div className="font-hand text-sm text-gray-400 absolute -bottom-6 right-2">Building</div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm text-sm font-medium text-gray-600 mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Looking for new roles
        </div>
      </div>
    </section>
  );
};

export default Hero;