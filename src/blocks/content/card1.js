export default function add7Card1(bm) {
    bm.add('card1', {
        label: 'Card',
        category: 'Tailwind Card',
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Card 1</div>`,
        content: `<div class="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <!-- Blog Image -->
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        alt="Ocean Waves"
        class="w-full h-52 object-cover"
      />

      <!-- Blog Content -->
      <div class="p-6">
        <span class="text-xs text-indigo-600 uppercase font-bold">Travel</span>
        <h2 class="text-2xl font-bold text-gray-800 mt-2 mb-2">
          Exploring the Beauty of Ocean Waves
        </h2>
        <p class="text-gray-600 text-sm mb-4">
          The ocean’s waves tell a story of mystery, beauty, and power. Discover
          how these natural wonders shape our planet and captivate our souls.
        </p>
        <div class="flex items-center justify-between">
          <a
            href="#"
            class="inline-block text-sm text-indigo-600 font-semibold hover:underline"
          >
            Read More →
          </a>
          <span class="text-xs text-gray-400">March 10, 2025</span>
        </div>
      </div>
    </div>`,
    })
}
