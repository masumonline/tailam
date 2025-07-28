export default function addButton9(bm) {
    bm.add("button9", {
        label: "Animate Button 1",
        category: "Tailwind Buttons",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Animate Button 1</div>`,
        content: `<button
        class="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:shadow-none transform hover:translate-y-1 transition mr-2"
      >
        Press Me
      </button>`,
    })
}
