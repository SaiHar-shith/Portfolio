import React, { useState } from 'react'; // Added useState for mobile menu
import profileImg from '../../src/assets/Profile.jpg'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  return (
    <>
      {/* MOBILE HEADER (Visible only on small screens) */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 px-4 py-3 flex justify-between items-center shadow-sm">
        <div className="font-bold text-lg tracking-tighter flex items-center gap-2">
           <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-md">S</div>
           <span>SAI.PORTFOLIO</span>
        </div>
        {/* Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 bg-white border-b border-gray-200 z-40 shadow-xl p-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-2">
             <a href="#" onClick={() => setIsOpen(false)} className="px-4 py-2 hover:bg-gray-50 rounded-lg">👤 Profile</a>
             <a href="#projects" onClick={() => setIsOpen(false)} className="px-4 py-2 bg-black text-white rounded-lg">📂 Portfolio</a>
             <a href="#contact" onClick={() => setIsOpen(false)} className="px-4 py-2 hover:bg-gray-50 rounded-lg">🔖 Contact</a>
          </nav>
          <a href="/Resume_Harshith.pdf" download className="text-center py-2 border border-gray-200 rounded-lg text-sm font-bold">Download Resume</a>
        </div>
      )}

      {/* DESKTOP SIDEBAR (Hidden on mobile, Visible on md+) */}
      <aside className="hidden md:flex w-80 h-screen sticky top-0 bg-white border-r border-gray-100 flex-col justify-between p-6 z-50">
        
        <div className="space-y-6">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
             <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-md">S</div>
             <span>SAI.PORTFOLIO</span>
          </div>

          <div className="text-center space-y-3 mt-8">
            <div className="relative inline-block">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto overflow-hidden border-2 border-white shadow-sm">
                 <img src={profileImg} alt="Sai Harshith" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded-full border border-blue-100 shadow-sm whitespace-nowrap">
                🛍️ Open to Work
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-gray-900">Sai Harshith</h2>
              <a href="https://www.linkedin.com/in/sai-harshith-katanguri-385949367" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:underline hover:text-blue-600">
                @saiharshith
              </a> 
              <span className="text-gray-500 text-sm"> • India</span>
            </div>

            <div className="bg-gray-50 rounded-xl p-3 text-sm text-gray-600 font-medium">
              Full Stack Developer &<br/> ML Engineer
            </div>
          </div>
        </div>

        <nav className="space-y-2">
          <a href="https://www.linkedin.com/in/sai-harshith-katanguri-385949367" target="_blank" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-lg transition">
            <span>👤</span> Profile
          </a>
          <a href="#projects" className="flex items-center gap-3 px-4 py-3 bg-black text-white rounded-lg shadow-lg transform scale-105 transition">
            <span>📂</span> Portfolio
          </a>
          <a href="#contact" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-lg transition">
            <span>🔖</span> Bookmark
          </a>
        </nav>

        <div>
          <a href="/SaiHarshith_Resume.pdf" download="SaiHarshith_Resume.pdf" className="block w-full text-center py-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm font-semibold transition cursor-pointer">
            Download Resume
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;