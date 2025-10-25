export default function addBlog6(bm) {
    bm.add("blog6", {
        label: "Blog-6",
        category: "Tailwind Blog",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Blog 6</div>`,
        content: `<section class="max-w-6xl px-6 py-16">
      <h1
        class="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight"
      >
        🗞️ Latest From the Journal
      </h1>
      <!-- Article -->
      <div class="grid md:grid-cols-2 gap-10 mb-16 items-center">
        <!-- Image -->
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          alt="Ocean"
          class="w-full h-72 object-cover rounded-lg shadow-md"
        />
        <!-- Content -->
        <div>
          <p class="text-sm text-gray-500 mb-1">🌊 Travel • July 2025</p>
          <h2 class="text-2xl font-bold mb-3">
            Exploring the Wild Shores of Bali
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            The wind carries ancient stories along the waves. Join us on a slow
            journey through quiet beaches, local food, and spiritual landscapes.
          </p>
          <a href="#" class="text-indigo-600 font-semibold hover:underline"
            >Read more →</a
          >
        </div>
      </div>
      <!-- Another Article -->
      <div
        class="grid md:grid-cols-2 gap-10 mb-16 items-center md:flex-row-reverse"
      >
        <!-- Image -->
        <img
          src="https://images.unsplash.com/photo-1533612608997-212b06408bb9?auto=format&fit=crop&w=800&q=80"
          alt="Forest"
          class="w-full h-72 object-cover rounded-lg shadow-md"
        />
        <!-- Content -->
        <div>
          <p class="text-sm text-gray-500 mb-1">🌲 Nature • June 2025</p>
          <h2 class="text-2xl font-bold mb-3">
            Walking Alone Through Whispering Pines
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Silence is a forgotten friend. In this essay, I explore the power of
            solo forest walks and the thoughts that emerge when we unplug.
          </p>
          <a href="#" class="text-indigo-600 font-semibold hover:underline"
            >Read more →</a
          >
        </div>
      </div>
    </section>`,
    })
}
