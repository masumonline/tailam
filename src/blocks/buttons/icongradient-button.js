export default function addIconGradientButton(bm) {
  bm.add("tailwind-button10", {
    label: "Gradient Icon Button",
    category: "Tailwind Buttons",
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" 
stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" fill="#00b8db"/>
<path d="m10 8 4 4-4 4" fill="#00b8db"/></svg>`,
    content: `<button class="p-3 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M9 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>`,
  });
}
