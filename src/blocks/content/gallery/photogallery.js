export default function addPhotoGallery(bm) {
    bm.add("Photo Gallery 1", {
        label: "Photo Gallery 1",
        category: "Tailwind Gallery",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Photo Gallery 1</div>`,
        content: `<h1 class="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
      📷 Beautiful Moments
    </h1>

    <div
      class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto"
    >
      <div
        class="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      >
        <img
          src="https://picsum.photos/id/1015/400/300"
          alt="Nature 1"
          class="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div
        class="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      >
        <img
          src="https://picsum.photos/id/1016/400/300"
          alt="Nature 2"
          class="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div
        class="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      >
        <img
          src="https://picsum.photos/id/1018/400/300"
          alt="Nature 3"
          class="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div
        class="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      >
        <img
          src="https://picsum.photos/id/1019/400/300"
          alt="Nature 4"
          class="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div
        class="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      >
        <img
          src="https://picsum.photos/id/1020/400/300"
          alt="Nature 5"
          class="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div
        class="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      >
        <img
          src="https://picsum.photos/id/1021/400/300"
          alt="Nature 6"
          class="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div
        class="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      >
        <img
          src="https://picsum.photos/id/1022/400/300"
          alt="Nature 7"
          class="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div
        class="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      >
        <img
          src="https://picsum.photos/id/1023/400/300"
          alt="Nature 8"
          class="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>`,
    })
}
