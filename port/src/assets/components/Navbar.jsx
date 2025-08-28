
const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
    <div className="container py-2 flex md:justify-between items-center ">
      <div className="text-2xl font-bold hidden md:inline">Abhishek</div>
      <div className="space-x-6">
        <a href="#home" className="hover:text-grey-400">Home</a>
        <a href="#about me" className="hover:text-grey-400">About-me</a>
        <a href="#services" className="hover:text-grey-400">Service</a>
        <a href="#projct" className="hover:text-grey-400">Project</a>
        <a href="contact" className="hover:text-grey-400">Contact</a>
      </div>
     <button className="bg-gradient-to-r from-green-400 to blue-500 text-white hidden md:inline transfrom transition-duration-300 hover:scale-105 px-4 py-4 rounded-full">contact me</button>
    </div>
    </nav>
  )
}

export default Navbar