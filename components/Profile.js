import GitHubCalendar from "react-github-calendar";
import Image from "next/image";

function Profile({ user }) {
  return (
    <div>
      <section className='border border-gray-700 p-3 rounded my-6'>
        <p className='text-xs text-gray-300 mt-4'>
          Sadhvi10 / README. <span className='text-gray-500 '>md</span>
        </p>

        <h1 className='text-2xl text-gray-300 font-semibold mt-3 '>
          Hi 👋, my name is Sadhvi Pugaonkar
        </h1>
        <div className='border-t border-gray-700 mt-2 '></div>
        <p className='text-gray-300 text-sm mt-3'>
          I'm an engineering graduate and also a self-taught full-stack web
          developer looking for a job opportunity that will help me to gain
          experience in this field.
        </p>

        <div className='border-t border-gray-700 mt-2 '></div>
        <h2 className='text-gray-300 text-lg font-semibold mt-6 '>
          My tech stack
        </h2>

        <div className='flex flex-wrap  justify-start items-center mt-3'>
          <img src='https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black' />
          <img src='https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white' />
          <img src='https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3' />
          <img src='https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white' />
          <img src='https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white' />
          <img src='https://img.shields.io/badge/Express.js-%23404d59.svg?style=flat-square&logo=express&logoColor=%2361DAFB' />
          <img src='https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black' />
          <img src='https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js' />
          <img src='https://img.shields.io/badge/-Git-black?style=flat-square&logo=git' />
          <img src='https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github' />
          <img src='https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white' />
          <img src='https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black' />
          <img src='https://img.shields.io/badge/-VSCode-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white' />
        </div>

        <h2 className='text-lg mt-8 font-semibold text-gray-300'>
          Technologies I want to explore
        </h2>
        <div className='flex fkex-wrap justify-start items-center mt-3'>
          <img src='https://img.shields.io/badge/Threejs-black?style=flat-square&logo=three.js&logoColor=white' />
          <img src='https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazon-aws' />
          <img src='https://img.shields.io/badge/-ReactNative-61DAFB?style=flat-square&logo=react&logoColor=black' />
        </div>

        <img
          className='mt-6'
          loading='lazy'
          src='https://github-readme-stats.vercel.app/api?username=Sadhvi10&&show_icons=true&title_color=ffffff&icon_color=159897&text_color=daf7dc&bg_color=0d1117'
          alt=''
        />
      </section>
      <div className='mt-16 hidden md:block'>
        <GitHubCalendar
          username='Sadhvi10'
          theme={{
            level0: "#161B22",
            level1: "#0e4429",
            level2: "#006d32",
            level3: "#26a641",
            level4: "#39d353",
          }}
        />
      </div>

      <div className='mt-16 block md:hidden'>
        <GitHubCalendar
          username='Sadhvi10'
          theme={{
            level0: "#161B22",
            level1: "#0e4429",
            level2: "#006d32",
            level3: "#26a641",
            level4: "#39d353",
          }}
        />
      </div>
    </div>
  );
}

export default Profile;
