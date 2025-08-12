export default function addBlog2(bm) {
    bm.add("blog2", {
        label: "Blog-2",
        category: "Tailwind Blog",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Blog 2</div>`,
        content: `<div class="max-w-6xl">
      <h1 class="text-3xl font-bold mb-8 text-gray-800">My Blog Posts</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Nature"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <span class="text-xs text-green-600 uppercase font-bold"
              >Nature</span
            >
            <h2 class="text-xl font-semibold text-gray-800 mt-2 mb-2">
             The cool breeze and shade of the hills
            </h2>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
             Enjoy the peaceful environment of the hills and the beauty of nature.
            </p>
            <div class="flex items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/50.jpg"
                alt="Writer"
                class="w-8 h-8 rounded-full object-cover"
              />
              <span class="text-gray-700 text-sm font-medium"
                >Md. Kamrul Islam</span
              >
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Education"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <span class="text-xs text-blue-600 uppercase font-bold"
              >Education</span
            >
            <h2 class="text-xl font-semibold text-gray-800 mt-2 mb-2">
              Modernization of Education
            </h2>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              The quality of education is being improved through the use of new technology.
            </p>
            <div class="flex items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Writer"
                class="w-8 h-8 rounded-full object-cover"
              />
              <span class="text-gray-700 text-sm font-medium">Sumi Rahman</span>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Education"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <span class="text-xs text-blue-600 uppercase font-bold"
              >Education</span
            >
            <h2 class="text-xl font-semibold text-gray-800 mt-2 mb-2">
              Modernization of Education
            </h2>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              The quality of education is being improved through the use of new technology.
            </p>
            <div class="flex items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Writer"
                class="w-8 h-8 rounded-full object-cover"
              />
              <span class="text-gray-700 text-sm font-medium">Sumi Rahman</span>
            </div>
          </div>
        </div>`,
    })
}
