import Link from "next/dist/client/link";
import { AiOutlineEye } from "react-icons/ai";
import { FiStar } from "react-icons/fi";

const Repository = ({ repo }) => {
  return (
    <section className='mt-4 border border-gray-800 text-gray-500'>
      {console.log(repo)}
      <div>
        <input
          className='hidden w-64  md:block w-84 bg-[#22272e] border border-gray-700 outline-none focus:border-gray-600 rounded m-2 px-2 py-1 text-xs text-gray-500 '
          type='text'
          placeholder='Find a repository...'
        />
      </div>
      {repo?.map((data) => (
        <div key={data?.id} className='p-3'>
          <Link href={data?.svn_url} className='font-xl'>
            <p className='text-[#59a6ff] text-xl font-semibold cursor-pointer'>
              {data?.name}
            </p>
          </Link>

          <p className='text-gray-500 my-3 text-sm'>{data?.description}</p>
          <div className='flex items-center mt-3 space-x-4'>
            <p className='text-xs text-gray-400'>{data?.language}</p>
            <div className='flex items-center'>
              <FiStar className='h-4 w-4 mr-1 text-gray-500' />
              <p className='text-gray-400 text-xs'>{data?.stargazers_count}</p>
            </div>
            <div className='flex items-center'>
              <AiOutlineEye className='h-4 w-4 mr-1 text-gray-500' />
              <p className='text-gray-400 text-xs'>{data?.watchers_count}</p>
            </div>
          </div>
          <div className='border-b mt-2 border-gray-800'></div>
        </div>
      ))}
    </section>
  );
};

export default Repository;
