export default function addButton3(bm) {
    bm.add("button3", {
        label: "Outline Button",
        category: "Tailwind Buttons",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Outline Button</div>`,
        content: `<button
        class="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 mr-2"
      >
        Outline Button
      </button>`,
    })
}
