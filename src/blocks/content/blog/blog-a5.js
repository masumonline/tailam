export default function addBlog5(bm) {
    bm.add("blog5", {
        label: "Blog-5",
        category: "Tailwind Blog",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Blog 5</div>`,
        content: `<div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-gray-800">My Blog Posts</h1>

      <ul class="divide-y divide-gray-200">
        <li class="py-6 flex flex-col sm:flex-row sm:justify-between">
          <div>
            <h2
              class="text-xl font-semibold text-blue-700 hover:underline cursor-pointer"
            >
              Nature and Culture of Bangladesh
            </h2>
            <p class="text-gray-600 mt-1">
              An analytical article on the beautiful nature and rich culture of
              Bangladesh.
            </p>
          </div>
          <div class="text-sm text-gray-500 mt-3 sm:mt-0">15 July, 2025</div>
        </li>

        <li class="py-6 flex flex-col sm:flex-row sm:justify-between">
          <div>
            <h2
              class="text-xl font-semibold text-blue-700 hover:underline cursor-pointer"
            >
              Health Awareness and Lifestyle
            </h2>
            <p class="text-gray-600 mt-1">
              Discussion on various aspects of health awareness necessary for a
              healthy lifestyle.
            </p>
          </div>
          <div class="text-sm text-gray-500 mt-3 sm:mt-0">10 July, 2025</div>
        </li>

        <li class="py-6 flex flex-col sm:flex-row sm:justify-between">
          <div>
            <h2
              class="text-xl font-semibold text-blue-700 hover:underline cursor-pointer"
            >
              Technology and the Future
            </h2>
            <p class="text-gray-600 mt-1">
              A study on the development of modern technology and its future
              impact.
            </p>
          </div>
          <div class="text-sm text-gray-500 mt-3 sm:mt-0">5 July, 2025</div>
        </li>
      </ul>
    </div>`,
    })
}
