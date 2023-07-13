import { LogoLink } from "../logoLink/LogoLInk.js";

export default function ProblemSetTable({ platformLogo, problems }) {
  return (
    <div className="px-6 lg:px-8">
      <div className="w-full h-full mt-10 -mx-6 overflow-x-auto rounded-b-lg ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300 ">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900"
              >
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
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Tags
              </th>
              <th
                scope="col"
                className=" py-3.5 pl-3 pr-6 text-sm font-semibold text-gray-900"
              >
                <span className="sr-only">Select</span>
                Learn
              </th>
            </tr>
          </thead>

          <tbody>
            {/* TABLE BODY STARTS WITH MAPPING 'data' */}
            {problems.map((problem, index) => (
              <tr key={index} className="overflow-scroll">
                {/* Problem Title Column */}
                <td
                  className={`relative py-4 pl-6 pr-3 text-sm ${index > 0? "border-t border-transparent": ""}`}
                >
                  <div className="font-medium text-gray-900">
                    {problem?.title}
                  </div>
                  <div className="flex flex-col mt-1 text-gray-500 sm:block lg:"></div>
                </td>
                <td
                  className={`px-3 py-3.5 text-sm text-gray-500 lg:table-cell ${
                    index > 0 ? "border-t border-gray-200" : ""
                  }`}
                >
                  {problem?.difficulty}
                </td>
                <td
                  className={`px-3 py-3.5 text-sm text-gray-500 lg:table-cell ${index > 0? "border-t border-gray-200": ""}`}
                >
                  <LogoLink
                    link={problem?.link}
                    image={platformLogo}
                  />
                </td>

                <td
                  className={`px-3 py-3.5 text-sm text-gray-500 ${
                    index > 0 ? "border-t border-gray-200" : ""
                  }`}
                >
                  <div className="flex flex-wrap">
                    {problem?.tags?.map((tag) => (
                      <span className="text-[#222] bg-accent rounded-md m-2 px-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td
                  className={`relative py-3.5 pl-3 pr-6 text-right text-sm font-medium ${
                    index > 0 ? "border-t border-transparent" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 border rounded-md shadow-sm border-platinum-300 bg-accent2 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                    disabled={problem?.isCurrent}
                  >
                    <a href={`${window.location.pathname}/${problem?.id}`}>Select</a>
                    <span className="sr-only">, {problem?.title}</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
