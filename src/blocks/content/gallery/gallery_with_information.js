export default function addGallerywithInformation(bm) {
    bm.add("Gallery_with_information", {
        label: "Gallery with information",
        category: "Tailwind Gallery",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Gallery with information</div>`,
        content: `<section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              class="w-full h-48 object-cover"
              src="https://picsum.photos/id/1015/400/300"
              alt="Mountain"
            />
            <div class="p-4">
              <h2 class="text-lg font-semibold text-gray-800">Mountain View</h2>
              <p class="text-sm text-gray-600">
                Location: Alps<br />Date: 2024-05-01
              </p>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              class="w-full h-48 object-cover"
              src="https://picsum.photos/id/1025/400/300"
              alt="Ocean"
            />
            <div class="p-4">
              <h2 class="text-lg font-semibold text-gray-800">Ocean Blue</h2>
              <p class="text-sm text-gray-600">
                Location: Pacific<br />Date: 2024-04-18
              </p>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              class="w-full h-48 object-cover"
              src="https://picsum.photos/id/1035/400/300"
              alt="Forest"
            />
            <div class="p-4">
              <h2 class="text-lg font-semibold text-gray-800">Green Forest</h2>
              <p class="text-sm text-gray-600">
                Location: Amazon<br />Date: 2024-03-27
              </p>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              class="w-full h-48 object-cover"
              src="https://picsum.photos/id/1045/400/300"
              alt="Desert"
            />
            <div class="p-4">
              <h2 class="text-lg font-semibold text-gray-800">Sahara Dunes</h2>
              <p class="text-sm text-gray-600">
                Location: Africa<br />Date: 2024-06-11
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>`,
    })
}
