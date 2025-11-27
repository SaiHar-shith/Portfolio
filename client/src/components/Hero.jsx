import profileImg from '../assets/Profile.jpg';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-white bg-grid-pattern flex flex-col pt-16 md:pt-0"> 
    {/* Added pt-16 for mobile header spacing */}
      
      {/* Top Nav (Hidden on Mobile) */}
      <nav className="hidden md:flex justify-between items-center p-8">
        <div className="flex gap-8 text-gray-500 font-medium">
          <a href="#projects" className="text-black">Work</a>
          <a href="#" className="hover:text-black transition">About</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </div>
        <div className="flex gap-4 text-sm font-semibold">
          <a href="https://www.linkedin.com/in/sai-harshith-katanguri-385949367" target="_blank" className="text-gray-500 hover:text-black">LinkedIn ↗</a>
          <a href="https://github.com/SaiHar-shith" target="_blank" className="text-gray-500 hover:text-black">Github ↗</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 mt-8 md:mt-0">
        
        {/* Sticky Note (Hidden on Mobile) */}
        <div className="absolute top-20 left-10 hidden lg:block transform -rotate-12">
          <div className="bg-blue-600 text-white font-black px-4 py-2 text-xl shadow-lg">
            KITS Warangal
          </div>
        </div>

        {/* Heading - Smaller on Mobile */}
        <h1 className="font-serif text-4xl md:text-7xl leading-tight text-gray-900 max-w-4xl">
          Hello, I’m Sai 
          <span className="inline-block w-12 h-12 md:w-20 md:h-20 mx-2 md:mx-3 rounded-2xl overflow-hidden align-middle border-2 md:border-4 border-white shadow-lg transform rotate-3">
            <img src={profileImg} alt="avatar" className="w-full h-full object-cover" />
          </span> 
          Welcome!
        </h1>
        
        <p className="font-serif text-xl md:text-5xl text-gray-800 mt-4 md:mt-6 italic">
          Building intelligence into <br/> scalable web apps.
        </p>

        {/* Diagram - Vertical on Mobile, Horizontal on Desktop */}
        <div className="relative mt-12 md:mt-20 mb-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          
          {/* Node 1 */}
          <div className="relative group">
            <div className="font-hand text-lg text-gray-500 absolute -top-6 left-0 transform -rotate-12">previously</div>
            <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shadow-sm z-10 relative">
               <span className="text-2xl">🎓</span>
            </div>
            <div className="font-hand text-sm text-gray-400 absolute -bottom-6 left-2">Student</div>
          </div>

          {/* Vertical Line for Mobile, Horizontal for Desktop */}
          <div className="w-0.5 h-8 md:w-16 md:h-0.5 bg-gray-300"></div>

          {/* Center */}
          <div className="font-hand text-xl md:text-4xl font-bold px-4 border border-gray-100 bg-white rounded-lg p-2 shadow-sm">
             &lt; Full Stack & ML &gt;
          </div>

          <div className="w-0.5 h-8 md:w-16 md:h-0.5 bg-gray-300"></div>

          {/* Node 2 */}
          <div className="relative group">
             <div className="font-hand text-lg text-gray-500 absolute -top-6 right-0 transform rotate-12">currently</div>
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