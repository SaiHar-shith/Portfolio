import React, { useEffect, useState } from 'react'; // Import hooks
import { io } from "socket.io-client"; // Import Socket
import profileImg from '../assets/Profile.jpg'; 

const Sidebar = () => {
  const [activeUsers, setActiveUsers] = useState(1);

  useEffect(() => {
    // Connect to Backend
    const socket = io("https://portfolio-jzb1.onrender.com");

    // Listen for count updates
    socket.on("userCount", (count) => {
      setActiveUsers(count);
    });

    // Cleanup on unmount
    return () => socket.disconnect();
  }, []);

  return (
    <aside className="w-full md:w-80 h-auto md:h-screen sticky top-0 bg-white border-r border-gray-100 flex flex-col justify-between p-6 z-50">
      
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
            
            {/* Status Badges */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 w-full">
              
              {/* Existing Open to Work Badge */}
              <div className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded-full border border-blue-100 shadow-sm whitespace-nowrap">
                🛍️ Open to Work
              </div>

              {/* NEW REAL-TIME BADGE */}
              <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200 shadow-sm flex items-center gap-1 animate-pulse">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                {activeUsers} Online
              </div>

            </div>
          </div>
          
          <div className="mt-6"> {/* Added margin to clear the badges */}
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

      <nav className="space-y-2 mt-8 md:mt-0">
        <a href="https://www.linkedin.com/in/sai-harshith-katanguri-385949367" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-lg transition">
          <span>👤</span> Profile
        </a>
        <a href="#projects" className="flex items-center gap-3 px-4 py-3 bg-black text-white rounded-lg shadow-lg transform scale-105 transition">
          <span>📂</span> Portfolio
        </a>
        <a href="#contact" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-lg transition">
          <span>🔖</span> Bookmark
        </a>
      </nav>

      <div className="hidden md:block">
        <a 
          href="/Resume_Harshith.pdf" 
          download="Resume_Sai_Harshith.pdf"
          className="block w-full text-center py-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm font-semibold transition cursor-pointer"
        >
          Download Resume
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;