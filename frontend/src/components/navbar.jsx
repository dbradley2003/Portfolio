import '../fonts.css'
import '../input.css'
import { FiMail } from 'react-icons/fi';
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/linkedin'
function Navbar() {
    return (
      <nav className="navbar bg-blue-800 border-b-2 border-stone-300 h-[80px] w-full">
      
  <div class=" flex flex-nowrap h-full md:flex-wrap items-center  justify-between mx-auto  px-2 md:px-6 gap-8">
    
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
  