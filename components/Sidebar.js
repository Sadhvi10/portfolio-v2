import Image from "next/image";
import Link from "next/link";
import { FiUsers, FiStar } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillGithub,
} from "react-icons/ai";
function Sidebar() {
  return (
    <aside className='p-10 flex flex-col'>
      {/* Image */}
      <div className='md:block flex items-center space-x-6'>
        <div className='block md:hidden'>
          <Image
            src='https://avatars.githubusercontent.com/u/65889688?v=4'
            width={90}
            height={90}
            className='rounded-full'
          />
        </div>
        <div className='hidden md:block lg:hidden'>
          <Image
            src='https://avatars.githubusercontent.com/u/65889688?v=4'
            width={150}
            height={150}
            className='rounded-full'
          />
        </div>
        <div className='hidden md:hidden lg:block'>
          <Image
            src='https://avatars.githubusercontent.com/u/65889688?v=4'
            width={250}
            height={250}
            className='rounded-full'
          />
        </div>

        {/* Name & Username */}
        <div>
          <h1 className='font-bold text-gray-200 text-2xl'>Sadhvi Pugaonkar</h1>
          <Link href='https://github.com/Sadhvi10'>
            <h4 className='font-light text-gray-600 text-xl'>Sadhvi10</h4>
          </Link>
        </div>
      </div>

      {/* Description */}
      <p className='text-sm text-gray-300 mt-4'>
        Self-taught 📚 Full-Stack Web Dev ⚡ • Creator & Engineer 🎓 • Mumbaikar
        🙌
      </p>

      {/* Following stats */}
      <div className='flex space-x-1 items-center md:flex-col lg:flex-row  mt-5'>
        <div className='flex items-center space-x-2'>
          <FiUsers className='h-3 w-3 text-gray-600' />
          <p className='text-gray-600 text-sm md:block  '>
            <span className='text-gray-200'>5 </span> followers
          </p>
        </div>
        <p className='text-gray-200 md:hidden lg:inline-flex'>&bull;</p>
        <div className='flex items-center space-x-2'>
          <p className='text-gray-600 text-sm md:block'>
            <span className='text-gray-200'>4 </span> following
          </p>
        </div>
        <p className='text-gray-200 md:hidden lg:block'>&bull;</p>
        <div className='flex items-center space-x-2'>
          <FiStar className='h-3 w-3 text-gray-600' />
          <p className='text-gray-200 text-sm md:inline-flex'>1</p>
        </div>
      </div>

      <p className=' border-t border-[#768390] mt-3 border-opacity-70'></p>

      {/* Social media links */}
      <div className='mt-3'>
        <h2 className='text-lg text-gray-300 font-medium mb-3'>
          React Out Via
        </h2>
        <div className='flex items-center space-x-2 sm:space-x-1'>
          <a href='mailto:sadhvip101@gmail.com' target='_blank'>
            <SiGmail className='text-xl text-gray-500 hover:text-gray-400' />
          </a>
          <a href='https://www.instagram.com/contento_chica10/' target='_blank'>
            <AiOutlineInstagram className='text-xl text-gray-500 hover:text-gray-400' />
          </a>
          <a
            href='https://www.linkedin.com/in/sadhvi-pugaonkar-6b62b5169/'
            target='_blank'
          >
            <AiFillLinkedin className='text-xl text-gray-500 hover:text-gray-400' />
          </a>
          <a href='https://github.com/Sadhvi10' target='_blank'>
            <AiFillGithub className='text-xl text-gray-500 hover:text-gray-400' />
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
