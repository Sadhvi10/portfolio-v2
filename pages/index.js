import Head from "next/head";
import { useState } from "react";
import { BsBook } from "react-icons/bs";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { RiBookMarkFill } from "react-icons/ri";
import { AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import Profile from "../components/Profile";
import Repository from "../components/Repository";
import Project from "../components/Project";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import { getProjects } from "./api/project";

export default function Home({ user, repos, projects }) {
  const [tab, setTab] = useState("profile");
  return (
    <>
      <Head>
        <title>Sadhvi Pugaonkar</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen bg-[#2d333b] sm:bg-[#22272e]'>
        {/* Navbar */}
        <Navbar />

        {/* Sidebar */}
        <div className='container md:flex-nowrap text-gray-100 flex flex-wrap mx-auto py-10 md:py-16 px-2'>
          {/* Sidebar wrapper */}
          <div className='w-full md:w-1/4'>
            <Sidebar user={user} />
          </div>

          {/* Overview / Respositories / Projects / Contact Me */}
          <div className='w-full md:w-3/4 px-1 overflow-hidden mt-5'>
            <nav className='flex border-b border-gray-700 lg:space-x-6 md:space-x-2.5 sm:space-x-0 items-center'>
              {/* Overview */}
              <div>
                <button
                  className='flex items-center space-x-1 w-full text-gray-300 text-sm'
                  onClick={() => setTab("profile")}
                >
                  <BsBook className='text-gray-600 mr-2 hidden md:block  ' />
                  <p className={tab === "profile" && "font-semibold"}>
                    Overview
                  </p>
                </button>
                <div
                  className={
                    tab === "profile"
                      ? "border-b-2 w-full border-[#f78166] mt-2"
                      : "border-b-2 w-full border-transparent mt-2"
                  }
                ></div>
              </div>

              {/* Repositories */}
              <div>
                <button
                  className='flex items-center space-x-1 w-full text-gray-300 text-sm'
                  onClick={() => setTab("repositories")}
                >
                  <RiBookMarkFill className='mr-2 text-gray-600 hidden md:block ' />
                  <p className='text-sm flex items-center'>
                    Repositories
                    <span className='inline-flex items-center justify-center px-2 py-1 ml-1 mr-2 text-xs font-bold leading-none text-gray-300 bg-gray-700 rounded-full'>
                      {user.public_repos}
                    </span>
                  </p>
                </button>
                <div
                  className={
                    tab === "repositories"
                      ? "border-b-2 w-full border-[#f78166] mt-2"
                      : "border-b-2 w-full border-transparent mt-2"
                  }
                ></div>
              </div>

              {/* Projects */}
              <div>
                <button
                  className='flex items-center space-x-1 w-full text-gray-300 text-sm'
                  onClick={() => setTab("projects")}
                >
                  <AiOutlineProject className='mr-2 text-gray-600 hidden md:block' />
                  <p className='text-sm'>Projects</p>
                </button>
                <div
                  className={
                    tab === "projects"
                      ? "border-b-2 w-full border-[#f78166] mt-2"
                      : "border-b-2 w-full border-transparent mt-2"
                  }
                ></div>
              </div>

              {/* Contact Me */}
              <div>
                <button
                  className='flex items-center space-x-1 w-full text-gray-300 text-sm'
                  onClick={() => setTab("contact-me")}
                >
                  <AiOutlineMail className='mr-2 text-gray-600 hidden md:block ' />
                  <p className='text-sm whitespace-nowrap'>Contact Me</p>
                </button>
                <div
                  className={
                    tab === "contact-me"
                      ? "border-b-2 w-full border-[#f78166] mt-2"
                      : "border-b-2 w-full border-transparent mt-2"
                  }
                ></div>
              </div>
            </nav>
            {tab === "profile" && <Profile user={user} />}
            {tab === "repositories" && <Repository repo={repos} />}
            {tab === "projects" && <Project projects={projects} />}
            {tab === "contact-me" && <ContactMe />}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const userRep = await fetch(`https://api.github.com/users/Sadhvi10`);
  const user = await userRep.json();

  const reposResp = await fetch(
    `https://api.github.com/users/Sadhvi10/repos?sort=created_at&per_page=10`
  );
  const repos = await reposResp.json();

  const projects = getProjects();

  return {
    props: { user, repos, projects },
  };
}
