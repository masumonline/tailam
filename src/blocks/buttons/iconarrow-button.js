export default function addIconArrowButton(bm) {
  bm.add("tailwind-button6", {
    label: "Arrow Button",
    category: "Tailwind Buttons",
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" 
stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
<circle fill="#0084b1" cx="12" cy="12" r="10"/>
<path d="m12 16 4-4-4-4" fill="#0084b1" />
<path d="M8 12h8"/>
</svg>`,
    content: `<button class="p-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18m-6-6l6 6-6 6" />
  </svg>
</button>`,
  });
}
