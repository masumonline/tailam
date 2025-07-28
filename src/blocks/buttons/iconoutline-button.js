export default function addIconOutlineButton(bm) {
  bm.add("tailwind-button9", {
    label: "Rounded Outline Icon Button",
    category: "Tailwind Buttons",
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" 
viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" >
<circle cx="11" cy="11" r="8" stroke="black" fill="white"/>
<line x1="11" x2="11" y1="8" y2="14" stroke="black"/>
<line x1="8" x2="14" y1="11" y2="11" stroke="black"/>
</svg>`,
    content: `<button class="p-2 border border-gray-300 hover:border-gray-500 text-gray-700 hover:text-black rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 4v16m8-8H4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>`,
  });
}
