export default function addBlog3(bm) {
    bm.add("blog3", {
        label: "Blog-3",
        category: "Tailwind Blog",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Blog 3</div>`,
        content: `<section class="bg-gray-100 py-16">
      <div class="container mx-auto px-5">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Blog Highlights
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Tile 1 -->
          <article
            class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4"
          >
            <img
              src="https://picsum.photos/id/1080/100/100"
              alt="Blog 1"
              class="w-24 h-24 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <p
                class="text-indigo-600 uppercase tracking-wide font-semibold text-xs mb-1"
              >
                Design
              </p>
              <h3
                class="text-lg font-semibold text-gray-900 hover:text-indigo-600 cursor-pointer mb-2"
              >
                Creative Ways to Improve Your UX Design
              </h3>
              <p class="text-gray-700 text-sm mb-3">
                Simple techniques that can significantly enhance user experience
                and engagement.
              </p>
              <a
                href="#"
                class="text-indigo-600 font-semibold text-sm inline-flex items-center hover:underline"
              >
                Read More
                <svg
                  class="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </article>

          <!-- Tile 2 -->
          <article
            class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4"
          >
            <img
              src="https://picsum.photos/id/1084/100/100"
              alt="Blog 2"
              class="w-24 h-24 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <p
                class="text-indigo-600 uppercase tracking-wide font-semibold text-xs mb-1"
              >
                Marketing
              </p>
              <h3
                class="text-lg font-semibold text-gray-900 hover:text-indigo-600 cursor-pointer mb-2"
              >
                How Social Media Can Boost Your Brand Awareness
              </h3>
              <p class="text-gray-700 text-sm mb-3">
                Proven strategies to increase your visibility and reach more
                customers online.
              </p>
              <a
                href="#"
                class="text-indigo-600 font-semibold text-sm inline-flex items-center hover:underline"
              >
                Read More
                <svg
                  class="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </article>

          <!-- Tile 3 -->
          <article
            class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4"
          >
            <img
              src="https://picsum.photos/id/1082/100/100"
              alt="Blog 3"
              class="w-24 h-24 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <p
                class="text-indigo-600 uppercase tracking-wide font-semibold text-xs mb-1"
              >
                Wellness
              </p>
              <h3
                class="text-lg font-semibold text-gray-900 hover:text-indigo-600 cursor-pointer mb-2"
              >
                Mindfulness Practices for Daily Calm
              </h3>
              <p class="text-gray-700 text-sm mb-3">
                Easy to follow exercises to help you stay present and reduce
                stress every day.
              </p>
              <a
                href="#"
                class="text-indigo-600 font-semibold text-sm inline-flex items-center hover:underline"
              >
                Read More
                <svg
                  class="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>`,
    })
}
