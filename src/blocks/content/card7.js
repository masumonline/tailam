export default function add7Card7(bm) {
  bm.add("card7", {
    label: "Card-7",
    category: "Tailwind Card",
    media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Card 7</div>`,
    content: ` <div class="bg-white rounded-lg shadow-md w-80 p-6 text-center hover:shadow-xl transition duration-300">
      <!-- Profile Image -->
      <img
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400"
        alt="Profile"
        class="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-100 shadow-sm"
      />

      <!-- Name -->
      <h2 class="text-xl font-semibold text-gray-800 mb-1">Emma Williams</h2>

      <!-- Title -->
      <p class="text-gray-500 text-sm mb-4">Product Manager</p>

      <!-- Bio -->
      <p class="text-gray-600 text-sm mb-6">
        Balancing business goals and user needs to deliver seamless products.
        Cat lover and traveler.
      </p>

      <!-- Buttons -->
      <div class="flex justify-center space-x-3">
        <button
          class="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Follow
        </button>
        <button
          class="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition"
        >
          Message
        </button>
      </div>
    </div>`,
  });
}
