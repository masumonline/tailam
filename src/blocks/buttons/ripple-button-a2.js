export default function addButton2(bm) {
    bm.add("button2", {
        label: "Ripple Button",
        category: "Tailwind Buttons",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Ripple Button</div>`,
        content: `<button
        class="relative overflow-hidden bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
      >
        Ripple Button
        <span class="absolute inset-0 bg-white opacity-10 rounded"></span>
      </button>`,
    })
}
