export default function addButton8(bm) {
    bm.add("button8", {
        label: "Loading Button 1",
        category: "Tailwind Buttons",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Loading Button 1</div>`,
        content: `<button
        class="flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-md mr-2"
        disabled
      >
        <svg
          class="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        Loading...
      </button>`,
    })
}
