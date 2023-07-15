import resources from "../../data/learning_resources.json";

export default function ResourcesGrid() {
  return (
    <div className="px-6 lg:px-8">
      <div className="w-full h-full mt-10 -mx-6 rounded-b-lg ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
        <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource, index) => (
            <div
              key={index}
              class="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="placeholder.jpg"
                alt="Resume and Cover Letter Writing"
              />
              <div class="px-4 py-2">
                <h2 class="text-lg font-bold mb-2">{resource?.title}</h2>
                <p class="text-gray-600 h-40">{resource?.description}</p>
                <ul>
                  {resource?.points?.map((point, index) => (
                    <li key={index} class="text-gray-600">
                      • {point}
                    </li>
                  ))}
                </ul>
                <div class="mt-4 flex justify-end">
                  <a
                    href="#"
                    class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
                  >
                    Learn More
                  </a>
                  <a
                    href="#"
                    class="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg"
                  >
                    Bookmark
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
