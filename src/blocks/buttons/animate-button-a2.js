export default function addButton10(bm) {
    bm.add("button10", {
        label: "Animate Button 2",
        category: "Tailwind Buttons",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Animate Button 2</div>`,
        content: `<button
        class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-5 py-2 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
      >
        New Button
      </button>`,
    })
}
