import { leetCodeData } from '../../data/leetCode.js';
import { image } from '../../data/images.js';

// {
//   'id': 1,
//   'title': '1. Two Sum',
//   'link': 'https://leetcode.com/problems/two-sum/',
//   'difficulty': 'Easy',
//   'solved': true,
//   'tags': ['Array', 'Hash Table']
// },
let data = leetCodeData;


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TailwindTable() {
  return (
    <div className="px-6 lg:px-8">

      <div className="-mx-6 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg  w-full h-full overflow-y-scroll overflow-scroll rounded-b-lg">
        <table className="min-w-full divide-y divide-gray-300 ">
          <thead>
            <tr className="overflow-scroll">
              <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 overflow-scroll">
                Problem
              </th>
              <th
                scope="col"
                className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Difficulty
              </th>
              <th
                scope="col"
                className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Site
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Tags
              </th>
              <th scope="col" className=" py-3.5 pl-3 pr-6 text-sm font-semibold text-gray-900">
                <span className="sr-only">Select</span>
                Learn
              </th>
            </tr>
          </thead>

          <tbody className="overflow-scroll">
            {/* TABLE BODY STARTS WITH MAPPING 'data' */}
            {data.map((data, dataIdx) => (
              <tr key={data.id} className="overflow-scroll">

                {/* Problem Title Column */}
                <td
                  className={classNames(
                    dataIdx === 0 ? '' : 'border-t border-transparent',
                    'relative py-4 pl-6 pr-3 text-sm'
                  )}
                >
                  <div className="font-medium text-gray-900">
                    {data.title}
                  </div>
                  <div className="mt-1 flex flex-col text-gray-500 sm:block lg:">
                    {/* <span className={classNames(
                    data.difficulty === 'Easy' ? 'text-[#222] bg-accent rounded-md px-1' : 'medium' ? 'text-blue' : 'hard' ? 'text-red-500' : 'text-gray-500')}>
                      {data.difficulty}
                    </span> */}

                  </div>
                  {dataIdx !== 0 ? <div className="absolute right-0 left-6 -top-px h-px bg-gray-200" /> : null}
                </td>
                {/* Difficulty Column */}
                <td
                  className={classNames(
                    dataIdx === 0 ? '' : 'border-t border-gray-200',
                    ' px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                  )}
                >
                  {data.difficulty}
                </td>
                <td
                  className={classNames(
                    dataIdx === 0 ? '' : 'border-t border-gray-200',
                    ' px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                  )}
                >
                  <a href={data.link}>
                    <img src={image[0].leetCodeLogo} alt="LeetCode Logo" className=" w-16" />
                 </a>
                </td>

                <td
                  className={classNames(
                    dataIdx === 0 ? '' : 'border-t border-gray-200',
                    'px-3 py-3.5 text-sm text-gray-500'
                  )}
                >
                  <div className="flex flex-wrap">
                  {data.tags.map((tag) => (
                    <span className='text-[#222] bg-accent rounded-md m-2 px-1'>

                      {tag}
                    </span>),)}
</div>
                </td>
                <td
                  className={classNames(
                    dataIdx === 0 ? '' : 'border-t border-transparent',
                    'relative py-3.5 pl-3 pr-6 text-right text-sm font-medium'
                  )}
                >
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-platinum-300 bg-accent2 px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-accent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                    disabled={data.isCurrent}
                  >
                    <a href={data.id}>
                    Select
                    </a>
                    <span className="sr-only">, {data.title}</span>
                  </button>
                  {dataIdx !== 0 ? <div className="absolute right-6 left-0 -top-px h-px bg-gray-200" /> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
