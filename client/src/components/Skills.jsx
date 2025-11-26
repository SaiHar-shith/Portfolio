const Skills = () => {
  const skills = [
    "React.js", "Node.js", "Python", "Machine Learning", 
    "Java (OOPS)", "SQL", "Langchain", "MongoDB", "Socket.io"
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Technical Arsenal</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="px-4 py-2 bg-white shadow-md rounded-lg text-gray-700 font-semibold border border-gray-200">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;