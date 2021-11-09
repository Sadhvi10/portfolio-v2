import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer className='p-10 md:p-32'>
      <div className='border-t border-[#768390] p-8 border-opacity-20'>
        <div className='flex items-center justify-center md:justify-evenly flex-wrap space-x-4 space-y-1 text-xs text-[#539bf5] cursor-pointer'>
          <p className='text-xs text-gray-400 '>&copy; 2021 Github,Inc.</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Security</p>
          <p>Status</p>
          <p>Docs</p>

          <AiFillGithub className='hidden md:inline-flex h-8 w-8 text-gray-400 hover:text-gray-100' />

          <p>Contact GitHub</p>
          <p>Pricing</p>
          <p>API</p>
          <p>Training</p>
          <p>Blog</p>
          <p>About</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
