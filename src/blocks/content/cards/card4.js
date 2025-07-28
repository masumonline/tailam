export default function add7Card4(bm) {
  bm.add("card4", {
    label: "Card-4",
    category: "Tailwind Card",
    media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Card 4</div>`,
    content: ` <div
      class="max-w-sm bg-white rounded-lg shadow-md p-6 text-center transition transform hover:scale-105 hover:shadow-xl duration-300"
    >
      <!-- Profile Image -->
      <img
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400"
        alt="Profile"
        class="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-indigo-400"
      />

      <!-- Name -->
      <h2 class="text-2xl font-semibold text-gray-800 mb-1">Daniel Carter</h2>

      <!-- Title -->
      <p class="text-indigo-600 text-sm mb-4">Software Developer</p>

      <!-- Bio -->
      <p class="text-gray-600 text-sm mb-6 px-4">
        Passionate coder, tech enthusiast, and lifelong learner.
      </p>

      <!-- Follow Button -->
      <button
        class="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition"
      >
        Follow
      </button>
    </div>`,
  });
}
