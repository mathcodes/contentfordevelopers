import { image } from '../../data/images.js';
import { LogoLink } from '../logoLink/LogoLInk.js';

// {
//   'id': 1,
//   'title': '1. Two Sum',
//   'link': 'https://leetcode.com/problems/two-sum/',
//   'difficulty': 'Easy',
//   'solved': true,
//   'tags': ['Array', 'Hash Table']
// },



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TailwindTable({ data }) {
  const link = [{
    "leetCodeLink": "leetcode/",
    "leetCodeLogo": "https://raw.githubusercontent.com/mathcodes/contentfordevelopers/main/src/assets/Images/LeetCode_logo_black.png",
    "codeWarsLink": "codewars/",
    "codeWarsLogo": "https://www.codewars.com/packs/assets/logo.61192cf7.svg",
  }]

  let c = link[0].leetCodeLink
  let d = link[0].codeWarsLink
  let i = data.id
  let e = [c, i].join("")

  console.log(c)
  console.log(d)
  console.log(e)
  console.log(i)
  return (
    <div className="px-6 lg:px-8">

      <div className="w-full h-full mt-10 -mx-6 overflow-scroll overflow-y-scroll rounded-b-lg ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
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
                  <div className="flex flex-col mt-1 text-gray-500 sm:block lg:">


                  </div>
                  {dataIdx !== 0 ? <div className="absolute right-0 h-px bg-gray-200 left-6 -top-px" /> : null}
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
                  <LogoLink link={link.leetCodeLink + data.link} image={image[0].leetCodeLogo} />
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
                    className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 border rounded-md shadow-sm border-platinum-300 bg-accent2 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                    disabled={data.isCurrent}
                  >
                    <a href={(`${c}${data.id}`)}>
                      Select
                    </a>
                    <span className="sr-only">, {data.title}</span>
                  </button>
                  {dataIdx !== 0 ? <div className="absolute left-0 h-px bg-gray-200 right-6 -top-px" /> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="placeholder.jpg" alt="Resume and Cover Letter Writing" />
            <div class="px-4 py-2">
              <h2 class="text-lg font-bold mb-2">Resume and Cover Letter Writing</h2>
              <p class="text-gray-600">Tips and tricks on crafting an effective resume and cover letter for a developer position, including common mistakes to avoid and best practices to follow.</p>
              <div class="mt-4 flex justify-end">
                <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Learn More</a>
                <a href="#" class="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg">Bookmark</a>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="placeholder.jpg" alt="Resume and Cover Letter Writing" />
            <div class="px-4 py-2">
              <h2 class="text-lg font-bold mb-2">Resume and Cover Letter Writing</h2>
              <p class="text-gray-600">Tips and tricks on crafting an effective resume and cover letter for a developer position, including common mistakes to avoid and best practices to follow.</p>
              <div class="mt-4 flex justify-end">
                <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Learn More</a>
                <a href="#" class="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg">Bookmark</a>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="placeholder.jpg" alt="Resume and Cover Letter Writing" />
            <div class="px-4 py-2">
              <h2 class="text-lg font-bold mb-2">Resume and Cover Letter Writing</h2>
              <p class="text-gray-600">Tips and tricks on crafting an effective resume and cover letter for a developer position, including common mistakes to avoid and best practices to follow.</p>
              <div class="mt-4 flex justify-end">
                <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Learn More</a>
                <a href="#" class="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg">Bookmark</a>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="placeholder.jpg" alt="Resume and Cover Letter Writing" />
            <div class="px-4 py-2">
              <h2 class="text-lg font-bold mb-2">Resume and Cover Letter Writing</h2>
              <p class="text-gray-600">Tips and tricks on crafting an effective resume and cover letter for a developer position, including common mistakes to avoid and best practices to follow.</p>
              <div class="mt-4 flex justify-end">
                <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Learn More</a>
                <a href="#" class="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg">Bookmark</a>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="placeholder.jpg" alt="Resume and Cover Letter Writing" />
            <div class="px-4 py-2">
              <h2 class="text-lg font-bold mb-2">Resume and Cover Letter Writing</h2>
              <p class="text-gray-600">Tips and tricks on crafting an effective resume and cover letter for a developer position, including common mistakes to avoid and best practices to follow.</p>
              <div class="mt-4 flex justify-end">
                <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Learn More</a>
                <a href="#" class="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg">Bookmark</a>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="placeholder.jpg" alt="Resume and Cover Letter Writing" />
            <div class="px-4 py-2">
              <h2 class="text-lg font-bold mb-2">Resume and Cover Letter Writing</h2>
              <p class="text-gray-600">Tips and tricks on crafting an effective resume and cover letter for a developer position, including common mistakes to avoid and best practices to follow.</p>
              <div class="mt-4 flex justify-end">
                <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Learn More</a>
                <a href="#" class="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg">Bookmark</a>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="placeholder.jpg" alt="Resume and Cover Letter Writing" />
            <div class="px-4 py-2">
              <h2 class="text-lg font-bold mb-2">Resume and Cover Letter Writing</h2>
              <p class="text-gray-600">Tips and tricks on crafting an effective resume and cover letter for a developer position, including common mistakes to avoid and best practices to follow.</p>
              <div class="mt-4 flex justify-end">
                <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Learn More</a>
                <a href="#" class="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg">Bookmark</a>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="placeholder.jpg" alt="Resume and Cover Letter Writing" />
            <div class="px-4 py-2">
              <h2 class="text-lg font-bold mb-2">Resume and Cover Letter Writing</h2>
              <p class="text-gray-600">Tips and tricks on crafting an effective resume and cover letter for a developer position, including common mistakes to avoid and best practices to follow.</p>
              <div class="mt-4 flex justify-end">
                <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Learn More</a>
                <a href="#" class="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg">Bookmark</a>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="placeholder.jpg" alt="Resume and Cover Letter Writing" />
            <div class="px-4 py-2">
              <h2 class="text-lg font-bold mb-2">Resume and Cover Letter Writing</h2>
              <p class="text-gray-600">Tips and tricks on crafting an effective resume and cover letter for a developer position, including common mistakes to avoid and best practices to follow.</p>
              <div class="mt-4 flex justify-end">
                <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Learn More</a>
                <a href="#" class="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg">Bookmark</a>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="placeholder.jpg" alt="Resume and Cover Letter Writing" />
            <div class="px-4 py-2">
              <h2 class="text-lg font-bold mb-2">Resume and Cover Letter Writing</h2>
              <p class="text-gray-600">Tips and tricks on crafting an effective resume and cover letter for a developer position, including common mistakes to avoid and best practices to follow.</p>
              <div class="mt-4 flex justify-end">
                <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Learn More</a>
                <a href="#" class="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg">Bookmark</a>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="placeholder.jpg" alt="Resume and Cover Letter Writing" />
            <div class="px-4 py-2">
              <h2 class="text-lg font-bold mb-2">Resume and Cover Letter Writing</h2>
              <p class="text-gray-600">Tips and tricks on crafting an effective resume and cover letter for a developer position, including common mistakes to avoid and best practices to follow.</p>
              <div class="mt-4 flex justify-end">
                <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Learn More</a>
                <a href="#" class="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg">Bookmark</a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
