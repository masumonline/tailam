export default function addOverlayGridGallery1(bm) {
    bm.add("Overlay Grid Gallery 1", {
        label: "Overlay Grid Gallery 1",
        category: "Tailwind Gallery",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Overlay Grid Gallery 1</div>`,
        content: ` <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">
      🌟 Overlay Grid Gallery
    </h1>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
    >
      <!-- Item -->
      <div class="relative group overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://picsum.photos/id/1018/400/300"
          alt="Gallery Image"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-semibold"
        >
          Nature View
        </div>
      </div>

      <!-- Item -->
      <div class="relative group overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://picsum.photos/id/1015/400/300"
          alt="Gallery Image"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-semibold"
        >
          Mountain Lake
        </div>
      </div>

      <!-- Item -->
      <div class="relative group overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://picsum.photos/id/1019/400/300"
          alt="Gallery Image"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-semibold"
        >
          Urban Street
        </div>
      </div>

      <!-- Item -->
      <div class="relative group overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://picsum.photos/id/1031/400/300"
          alt="Gallery Image"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-semibold"
        >
          Foggy Forest
        </div>
      </div>

      <!-- Add more items as needed -->
    </div>`,
    })
}
