export default function addBlog8(bm) {
    bm.add("blog8", {
        label: "Blog 8",
        category: "Tailwind Blog",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Blog 8</div>`,
        content: `<section class="bg-white py-16">
      <div class="container">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
          Featured Posts
        </h2>
        <div class="space-y-10 max-w-5xl mx-auto">
          <!-- Card 1 -->
          <article
            class="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://picsum.photos/id/1059/300/200"
              alt="Post 1"
              class="w-full md:w-48 object-cover"
            />
            <div class="p-6 flex flex-col justify-center">
              <p
                class="text-indigo-600 uppercase tracking-wide font-semibold text-sm mb-1"
              >
                Lifestyle
              </p>
              <h3
                class="text-2xl font-semibold text-gray-900 mb-2 hover:text-indigo-600 cursor-pointer"
              >
                How to Create a Balanced Morning Routine
              </h3>
              <p class="text-gray-700 mb-4">
                Establish habits that set you up for a productive and calm day
                with these easy morning tips.
              </p>
              <a
                href="#"
                class="inline-flex items-center text-indigo-600 font-semibold hover:underline"
              >
                Read More
                <svg
                  class="w-5 h-5 ml-1"
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
          <!-- Card 2 -->
          <article
            class="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://picsum.photos/id/1062/300/200"
              alt="Post 2"
              class="w-full md:w-48 object-cover"
            />
            <div class="p-6 flex flex-col justify-center">
              <p
                class="text-indigo-600 uppercase tracking-wide font-semibold text-sm mb-1"
              >
                Finance
              </p>
              <h3
                class="text-2xl font-semibold text-gray-900 mb-2 hover:text-indigo-600 cursor-pointer"
              >
                Smart Saving Tips for Millennials
              </h3>
              <p class="text-gray-700 mb-4">
                Manage your money better with these practical tips tailored for
                young professionals.
              </p>
              <a
                href="#"
                class="inline-flex items-center text-indigo-600 font-semibold hover:underline"
              >
                Read More
                <svg
                  class="w-5 h-5 ml-1"
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
          <!-- Card 3 -->
          <article
            class="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://picsum.photos/id/1071/300/200"
              alt="Post 3"
              class="w-full md:w-48 object-cover"
            />
            <div class="p-6 flex flex-col justify-center">
              <p
                class="text-indigo-600 uppercase tracking-wide font-semibold text-sm mb-1"
              >
                Food
              </p>
              <h3
                class="text-2xl font-semibold text-gray-900 mb-2 hover:text-indigo-600 cursor-pointer"
              >
                Delicious Vegan Recipes You Must Try
              </h3>
              <p class="text-gray-700 mb-4">
                Tasty and healthy vegan dishes that anyone can cook at home with
                simple ingredients.
              </p>
              <a
                href="#"
                class="inline-flex items-center text-indigo-600 font-semibold hover:underline"
              >
                Read More
                <svg
                  class="w-5 h-5 ml-1"
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
