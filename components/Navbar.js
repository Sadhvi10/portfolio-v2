import Image from "next/image";
import { AiFillGithub, AiOutlinePlus, AiFillCaretDown } from "react-icons/ai";
import { BsBell } from "react-icons/bs";

function Navbar() {
  return (
    <nav className='bg-[#2d333b] py-3 px-6 flex justify-between items-center '>
      {/* Left Side */}
      <div className='flex items-center'>
        <AiFillGithub className='h-8 w-8 hover:text-gray-400 mr-4 rounded-full text-gray-100' />
        <input
          type='text'
          placeholder='Search or jump to...'
          className='hidden md:block w-64 focus:w-80 focus:border-blue-400 transition-all  placeholder-gray-400 bg-[#0d1117] border border-gray-400 text-xs rounded py-1 text-gray-100 px-2 '
        />
        <p className='nav-tags'>Pulls</p>
        <p className='nav-tags'>Issues</p>
        <p className='nav-tags'>Marketplaces</p>
        <p className='nav-tags'>Explore</p>
      </div>
      {/* Right Side */}
      <div className='flex items-center space-x-4 cursor-pointer  '>
        <BsBell className='h-4 w-4 text-gray-100 hover:text-gray-400' />
        <div className='hidden md:flex items-center group'>
          <AiOutlinePlus className='h-4 w-4 mr-1 text-gray-100 group-hover:text-gray-400' />
          <AiFillCaretDown className='h-2 w-2 text-gray-100 group-hover:text-gray-400' />
        </div>
        <div className='hidden md:flex items-center space-x-1 group'>
          <Image
            src='https://avatars.githubusercontent.com/u/65889688?v=4'
            width={22}
            height={22}
            className='rounded-full group-hover:text-gray-400'
          />
          <AiFillCaretDown className='h-2 w-2 text-gray-100 group-hover:text-gray-400' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
