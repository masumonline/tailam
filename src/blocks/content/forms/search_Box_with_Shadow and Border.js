export default function addSearchBoxwithShadow_and_Border(bm) {
    bm.add("Search Box with shadow and border.", {
        label: "Search Boxw it Shadow_and_Border",
        category: "Tailwind Form",
        media: `<div style="font-size: 18px; font-weight: bold; color: #f97316;">Search Box with Shadow And Border</div>`,
        content: `<form class="max-w-md mx-auto my-6 relative">
      <input
        type="search"
        placeholder="Search here..."
        class="w-full py-3 px-4 rounded-lg border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-transparent transition"
        style="border-image: linear-gradient(to right, #4ade80, #06b6d4) 1"
      />
    </form>`,
    })
}
