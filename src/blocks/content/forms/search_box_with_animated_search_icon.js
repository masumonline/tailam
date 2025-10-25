export default function addSearchBoxWithAnimatedSearchIcon(bm) {
    bm.add("Search Box with Animated Search Icon", {
        label: "Search Box With Animaed Search Icon",
        category: "Tailwind Form",
        media: `<div style="font-size: 18px; font-weight: bold; color: #f97316;">Search Box with Animated Search Icon</div>`,
        content: `<form class="max-w-md mx-auto my-6 relative">
      <input
        type="search"
        placeholder="Search anything..."
        class="w-full py-3 pl-12 pr-4 rounded-lg border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
      />
      <div
        class="absolute left-4 top-1/2 -translate-y-1/2 text-green-400 animate-pulse"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-4.35-4.35m0 0a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9z"
          />
        </svg>
      </div>
    </form>`,
    })
}
