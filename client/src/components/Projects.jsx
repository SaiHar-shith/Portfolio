import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Don't Be The Last",
      tech: "React, Node.js",
      desc: "Real-time multiplayer browser game. Players join rooms and avoid the bomb.",
      stats: "Multiplayer",
      color: "bg-blue-600"
    },
    {
      title: "Smart Blog AI",
      tech: "LLAMA3, Langchain",
      desc: "AI engine generating full blog titles and content from simple prompts.",
      stats: "GenAI",
      color: "bg-purple-600"
    },
    {
      title: "Lingua Bridge",
      tech: "Transformers",
      desc: "English to Hindi AI translator achieving 97% accuracy.",
      stats: "NLP",
      color: "bg-orange-500"
    },
    {
      title: "Dynamic Pricing",
      tech: "Random Forest",
      desc: "ML model predicting optimal prices, increasing profit by 74%.",
      stats: "Data Science",
      color: "bg-emerald-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50/50">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Selected Work</h2>
        <p className="text-gray-500 mt-2">Scroll to shuffle the deck.</p>
      </div>

      <div className="w-full max-w-md mx-auto pb-32 relative px-4">
        
        {projects.map((proj, index) => {
          
          // Responsive Top Offset: Less gap on mobile
          const topOffset = 100 + (index * 30); 

          return (
            <div 
              key={index}
              className="sticky transition-transform duration-500 ease-out"
              style={{ top: `${topOffset}px` }} 
            >
              {/* Card Height: Auto on Mobile, Fixed 500px on Desktop */}
              <div className="relative overflow-hidden rounded-[2rem] bg-white border border-gray-200 shadow-xl flex flex-col min-h-[400px] md:h-[500px] transform hover:-translate-y-4 transition-all duration-300">
                
                {/* Top Half */}
                <div className={`${proj.color} h-40 md:h-[45%] p-6 text-white flex flex-col justify-between relative overflow-hidden shrink-0`}>
                  
                  <div className="absolute -right-4 -bottom-8 text-9xl font-serif font-bold opacity-20 rotate-12">
                    {index + 1}
                  </div>

                  <div className="flex justify-between items-start z-10">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold border border-white/30">
                       {proj.stats}
                    </span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-serif font-bold leading-none z-10 mt-auto">
                    {proj.title}
                  </h3>
                </div>

                {/* Bottom Half */}
                <div className="flex-1 p-6 md:p-8 flex flex-col bg-white">
                  <div className="flex-1">
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed font-sans">
                      {proj.desc}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-400">
                      {proj.tech}
                    </span>
                    <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition shadow-lg">
                      ↗
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;