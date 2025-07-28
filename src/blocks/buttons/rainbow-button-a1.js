export default function addButton6(bm) {
    bm.add("button6", {
        label: "Rainbow Button 1",
        category: "Tailwind Buttons",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Rainbow Button 1</div>`,
        content: `<button
        class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-2 rounded-md shadow-md hover:from-pink-600 hover:to-yellow-600 transition mr-2"
      >
        Buy Now
      </button>`,
    })
}
