export default function add7Card9(bm) {
  bm.add("card9", {
    label: "Card-9",
    category: "Tailwind Card",
    media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Card 9</div>`,
    content: `<div class="relative max-w-xs w-full p-1 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg">
      <div class="bg-white rounded-xl p-6 text-center">
        <!-- Profile Image Overlap -->
        <div class="-mt-16 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400"
            alt="Profile"
            class="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />
        </div>

        <!-- Name -->
        <h2 class="text-lg font-bold text-gray-800 mt-4">Liam Brown</h2>

        <!-- Title -->
        <p class="text-gray-500 text-sm mb-4">Frontend Developer</p>

        <!-- Bio -->
        <p class="text-gray-600 text-sm mb-6">
          Code lover, pixel perfectionist, and always learning. React & Tailwind
          enthusiast.
        </p>

        <!-- Buttons -->
        <div class="flex justify-center space-x-3">
          <button
            class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full hover:from-pink-500 hover:to-purple-500 transition"
          >
            Follow
          </button>
          <button
            class="border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100 transition"
          >
            Message
          </button>
        </div>
      </div>
    </div>`,
  });
}
