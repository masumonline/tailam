export default function addBlog1(bm) {
    bm.add("blog1", {
        label: "Blog-1",
        category: "Tailwind Blog",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Blog 1</div>`,
        content: ` <div class="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <!-- Blog Image -->
      <img
        src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        alt="Bangla blog picture"
        class="w-full h-52 object-cover"
      />

      <!-- Blog Content -->
      <div class="p-6">
        <span class="text-xs text-red-600 uppercase font-bold">Travel</span>
        <h2 class="text-2xl font-bold text-gray-800 mt-2 mb-3">
          Thrilling Travel Experience in the Sundarbans
        </h2>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        The Sundarbans is the largest mangrove forest in the world. Here, the roar of tigers, the waves of the river, and the silence of nature offer a unique experience. For travel enthusiasts, it is an endless attraction.
        </p>

        <div class="flex items-center justify-between mt-4">
          <div class="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Writer"
              class="w-10 h-10 rounded-full object-cover"
            />
            <span class="text-gray-700 text-sm font-medium">Mohammad Ali</span>
          </div>
          <span class="text-xs text-gray-400">10 March, 2025</span>
        </div>
      </div>
    </div>`,
    })
}
