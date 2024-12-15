import '../fonts.css'


function Navbar() {
    return (
      <nav className="bg-blue-500 leading-none text-purple text-2xl border-b-4 border-t-4 w-5/6 mx-auto  border-purple mt-10 font-terminal bg-black  ">
        <div className="flex justify-evenly">
          {/* Logo */}
          <a href="/" className="flex-1 text-center border-l-4 border-r-4  border-purple py-4 hover:bg-gray-800 hover:text-yellow-400">
            Home
          </a>
  
          {/* Links */}
         
            <a href="/" className="flex-1 text-center border-r-4  border-purple py-4 hover:bg-gray-800 hover:text-yellow-400">Projects</a>
            <a href="/about" className="flex-1 text-center border-r-4  border-purple py-4 hover:bg-gray-800 hover:text-yellow-400">About</a>
            <a href="/contact" className="flex-1 text-center border-r-4 border-purple py-4 hover:bg-gray-800 hover:text-yellow-400">Contact</a>
         
  
          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    );
  }
  export default Navbar;
  