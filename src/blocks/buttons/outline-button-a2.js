export default function addButton5(bm) {
    bm.add("button5", {
        label: "Outline Button 2",
        category: "Tailwind Buttons",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Outline Button 2</div>`,
        content: `<button
        class="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition mr-2"
      >
        Submit
      </button>`,
    })
}
