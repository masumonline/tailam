export default function addBlog9(bm) {
    bm.add("blog9", {
        label: "Blog 9",
        category: "Tailwind Blog",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Blog 9</div>`,
        content: `<div
      class="max-w-3xl w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
    >
      <!-- Blog Image -->
      <img
        src="https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        alt="Beautiful Nature"
        class="w-full md:w-1/3 h-git72 object-cover"
      />
      <!-- Blog Content -->
      <div class="p-6 flex flex-col justify-between">
        <div>
          <span class="text-xs text-blue-600 uppercase font-bold">Nature</span>
          <h2 class="text-2xl font-bold text-gray-800 mt-2 mb-3">
            The sparkling sound of the river brushing against the hillside.
          </h2>
          <p class="text-gray-600 text-sm mb-4">
           The meeting of hills and river is a marvelous creation of nature, where solitude and the colors of nature blend into one. This travel story will take you along that unknown path.
          </p>
        </div>
        <div class="flex items-center justify-between mt-4">
          <div class="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="Writer"
              class="w-10 h-10 rounded-full object-cover"
            />
            <span class="text-gray-700 text-sm font-medium">Anwara</span>
          </div>
          <span class="text-xs text-gray-400">15 April, 2025</span>
        </div>
      </div>
    </div>`,
    })
}
