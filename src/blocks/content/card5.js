export default function add7Card5(bm) {
  bm.add("card5", {
    label: "Card-5",
    category: "Tailwind Card",
    media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Card 5</div>`,
    content: ` <div class="w-80 rounded-xl overflow-hidden shadow-lg">
      <!-- Split Background Top -->
      <div class="bg-gradient-to-r from-indigo-500 to-purple-600 h-32 relative">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400"
          alt="Profile"
          class="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white shadow-lg"
        />
      </div>

      <!-- Content -->
      <div class="bg-white pt-16 pb-6 px-6 text-center">
        <!-- Name -->
        <h2 class="text-xl font-bold text-gray-800">Sofia Green</h2>

        <!-- Title -->
        <p class="text-gray-500 text-sm mb-3">Digital Marketer</p>

        <!-- Bio -->
        <p class="text-gray-600 text-sm mb-5">
          Helping brands grow online with creativity, data, and a touch of
          magic.
        </p>

        <!-- Buttons -->
        <div class="flex justify-center space-x-3">
          <button
            class="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition"
          >
            Connect
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
