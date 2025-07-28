export default function add7Card6(bm) {
  bm.add("card6", {
    label: "Card-6",
    category: "Tailwind Card",
    media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Card 6</div>`,
    content: `<div class="bg-gray-200 rounded-xl p-8 w-80 shadow-inner border border-gray-300">
      <!-- Profile Image -->
      <div class="flex justify-center mb-4">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400"
          alt="Profile"
          class="rounded-full w-28 h-28 shadow-md border-4 border-gray-300"
        />
      </div>

      <!-- Name & Title -->
      <h2 class="text-center text-2xl font-semibold text-gray-700 mb-1">
        Sarah Smith
      </h2>
      <p class="text-center text-gray-500 text-sm mb-4">UX/UI Designer</p>

      <!-- Bio -->
      <p class="text-center text-gray-600 text-sm mb-6">
        Lover of minimal design, soft shadows and clean interfaces.
      </p>

      <!-- Stats -->
      <div class="flex justify-around text-gray-700 mb-6">
        <div class="text-center">
          <p class="text-lg font-bold">1.2K</p>
          <p class="text-xs text-gray-500">Followers</p>
        </div>
        <div class="text-center">
          <p class="text-lg font-bold">850</p>
          <p class="text-xs text-gray-500">Following</p>
        </div>
        <div class="text-center">
          <p class="text-lg font-bold">42</p>
          <p class="text-xs text-gray-500">Posts</p>
        </div>
      </div>

      <!-- Follow Button -->
      <button
        class="w-full bg-gray-300 text-gray-700 py-2 rounded-lg shadow hover:shadow-lg transition"
      >
        Follow
      </button>
    </div>`,
  });
}
