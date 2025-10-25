export default function addSearchBarwithClearButton(bm) {
    bm.add("Search Bar With Clear Button", {
        label: "Search Bar With Clear Button",
        category: "Tailwind Form",
        media: `<div style="font-size: 18px; font-weight: bold; color: #f97316;">Search Bar With Clear Button</div>`,
        content: `<form class="max-w-md mx-auto my-6 relative">
      <input
        type="search"
        id="search"
        placeholder="Search articles..."
        class="w-full rounded-lg border border-gray-300 py-3 px-4 pr-10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
      />
      <input type="checkbox" id="clear-toggle" class="hidden" />
      <label
        for="clear-toggle"
        class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
        title="Clear"
      >
        &#10006;
      </label>
    </form>`,
    })
}
