export default function addButton4(bm) {
    bm.add("button4", {
        label: "Rounded Button Blue",
        category: "Tailwind Buttons",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Rounded Button Blue</div>`,
        content: `<button
        class="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition mr-2"
      >
        Click Me
      </button>`,
    })
}
