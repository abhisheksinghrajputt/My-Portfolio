
import AboutImage from "/components/assets/src/public/resuime.jpg"; // also from assets

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-32"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={AboutImage}
            alt="About Abhishek Kumar"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg border-4 border-green-400"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Hi, I'm <span className="font-semibold text-white">Abhishek Kumar</span>, 
            a Computer Science student from Rajasthan. I’m passionate about 
            <span className="text-green-400"> building modern, responsive websites</span> 
            and crafting web applications that combine performance, aesthetics, 
            and user-friendly experiences.
          </p>
          <p className="text-gray-400 leading-relaxed text-lg mb-8">
            I enjoy learning new technologies, working on real-world projects, 
            and continuously improving my skills in full-stack development. 
            My goal is to grow as a developer and contribute to impactful 
            digital solutions.
          </p>

          <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
