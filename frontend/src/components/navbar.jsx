import '../fonts.css'
import '../input.css'
import { FiMail } from 'react-icons/fi';
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/linkedin'
function Navbar() {
    return (
      <nav className="navbar bg-blue-800 border-b-2 border-stone-300 h-[80px] w-full">
      
  <div className="flex flex-wrap md:flex-nowrap h-full items-center justify-between mx-auto px-4 sm:px-6 md:px-8 gap-4 ">
              <p className=" text-center text-neutral-50 text-lg  md:text-3xl font-appleMedium">
           Dominic's Web Portfolio
          </p>
          <div className=" text-white text-xs  md:text-sm">
            <div className='items-center  inline-flex gap-1 '>
            <FiMail className='' />
                    <span><a href="mailto:dombradley2003@gmail.com" className="underline hover:text-blue-300 text-xs md:text-sm">dombradley2003@gmail.com</a></span>
                    </div>
                </div>
        </div>
      </nav>
   
      
    );
  }
  export default Navbar;
  