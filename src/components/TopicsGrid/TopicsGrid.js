import { topics }  from '../../data/topicsData'

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

export default function TopicsGrid() {
  const link = [{
    "leetCodeLink": "leetcode/",
    "leetCodeLogo": "https://raw.githubusercontent.com/mathcodes/contentfordevelopers/main/src/assets/Images/LeetCode_logo_black.png",
    "codeWarsLink": "codewars/",
    "codeWarsLogo": "https://www.codewars.com/packs/assets/logo.61192cf7.svg",
  }]

  let c = link[0].leetCodeLink
  let d = link[0].codeWarsLink
  let i = topics.id
  let e = [c, i].join("")

  console.log(c)
  console.log(d)
  console.log(e)
  console.log(i)
  console.log(topics)
  return (
    <div className="px-6 lg:px-8">

      <div className="w-full h-full mt-10 -mx-6 rounded-b-lg ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">

        <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
         {topics.map((topic) => (
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="placeholder.jpg" alt="Resume and Cover Letter Writing" />
            <div class="px-4 py-2">
              <h2 class="text-lg font-bold mb-2">{topic.title}</h2>
              <p class="text-gray-600 h-40">{topic.description}</p>
              <ul>
                <li class="text-gray-600">• {topic.point1}</li>
                <li class="text-gray-600">• {topic.point2}</li>
                <li class="text-gray-600">• {topic.point3}</li>
              </ul>
              <div class="mt-4 flex justify-end">
                <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Learn More</a>
                <a href="#" class="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg">Bookmark</a>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}
