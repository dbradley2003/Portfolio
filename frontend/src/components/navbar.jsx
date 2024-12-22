import '../fonts.css'
import '../input.css'
import { FiMail } from 'react-icons/fi';

function Navbar() {
    return (
      
      <nav className="navbar relative bg-blue-800 border-b-2 border-stone-300 h-[80px] w-full top-0 left-0">
               <div className="flex justify-center items-center gap-8 h-full py-4">
              <p className=" text-center text-neutral-50 text-lg sm:text-xl md:text-2xl font-appleMedium">
           Dominic's Web Portfolio
          </p>
          
        </div>
      </nav>
      
    );
  }
  export default Navbar;
  