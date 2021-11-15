import Link from "next/link";
import Image from "next/image";
import Icons from "./Icons";

const ProjectCard = ({ project }) => {
  return (
    <div key={project?.id} className='border border-gray-700 h-full rounded'>
      <Image
        className='transform transition translate hover:scale-110'
        src={project?.image}
        width={500}
        height={300}
        alt='projects'
      />
      <h2 className='text-gray-300 font-semibold text-xl px-2 py-2 sm:text-lg'>
        {project?.name}
      </h2>
      <p className='text-gray-600 text-sm px-2'>{project?.description}</p>

      <div className='flex items-center px-2 py-2'>
        {project?.tags?.map((tag) => (
          <Icons tag={tag} />
        ))}
      </div>
      <div className='flex justify-between items-center m-3'>
        <Link href={project?.source}>
          <button className='bg-[#238636] px-4 mr-2 rounded py-1 text-sm'>
            Source
          </button>
        </Link>
        <Link href={project?.live}>
          <button className='bg-gray-700 px-6 rounded py-1 text-sm '>
            Link
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
