
import HeroImage from "/components/assets/public/resuime.jpg"; 


const Hero = () => {
  return (
    <section
      id="home"
      className="bg-black text-white min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            I'm <span className="text-green-400">Abhishek Kumar</span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-xl mx-auto md:mx-0">
            I specialize in building modern websites and responsive web applications.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Contact Me
            </button>
            <button className="px-6 py-3 border-2 border-green-400 text-green-400 font-semibold rounded-full shadow-lg hover:bg-green-400 hover:text-black transition">
              View Projects
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={HeroImage}
            alt="Abhishek Kumar"
            className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full shadow-lg border-4 border-green-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
 