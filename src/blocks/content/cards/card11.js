export default function add7Card11(bm) {
    bm.add("card11", {
        label: "Card-11",
        category: "Tailwind Card",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Card 11</div>`,
        content: ` <div
      class="bg-gray-800 rounded-xl shadow-xl p-8 max-w-sm w-full text-center text-white"
    >
      <!-- Profile Image -->
      <img
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400"
        alt="Profile"
        class="w-28 h-28 mx-auto mb-6 border-4 border-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
        style="
          border-image-slice: 1;
          border-image-source: linear-gradient(
            to right,
            #ec4899,
            #ef4444,
            #facc15
          );
        "
      />

      <!-- Name with animated gradient -->
      <h2
        class="text-3xl font-extrabold mb-2 bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x"
      >
        Maya Shah
      </h2>

      <!-- Title with icon -->
      <p
        class="flex items-center justify-center space-x-2 text-sm text-gray-300 mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-yellow-400 animate-pulse"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 8v4l3 3"
          />
          <circle cx="12" cy="12" r="10" />
        </svg>
        <span>Product Designer</span>
      </p>

      <!-- Bio -->
      <p class="text-gray-400 mb-8 px-4">
        Crafting beautiful and user-friendly interfaces with passion and
        precision.
      </p>

      <!-- Follow Button -->
      <button
        class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 py-2 rounded-full font-semibold shadow-lg hover:brightness-110 transition"
      >
        Follow
      </button>
    </div>`,
    })
}
