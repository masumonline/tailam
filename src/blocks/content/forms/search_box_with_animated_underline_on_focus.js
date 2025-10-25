export default function addSearchBoxwithAnimatedUnderlineOnFocus(bm) {
    bm.add("Search Box with Animated Underline on Focus", {
        label: "Search Box with Animated Underline on Focus",
        category: "Tailwind Form",
        media: `<div style="font-size: 18px; font-weight: bold; color: #f97316;">Search Box with Animated Underline on Focus</div>`,
        content: `<form class="max-w-md mx-auto my-6 relative">
      <input
        type="search"
        placeholder="Search..."
        class="w-full border-b-2 border-gray-300 py-3 px-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition"
      />
    </form>`,
    })
}
