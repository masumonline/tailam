export default function addIconDeleteButton(bm) {
  bm.add("tailwind-button8", {
    label: "Delete Button Icon",
    category: "Tailwind Buttons",
    media: `<svg width="100" height="100">
 <g id="Layer_1">
  <rect rx="10" fill="#ec003f" stroke="#000" stroke-width="0" x="10.5" y="30.5" width="79" height="30" id="svg_1"/>
  <text transform="matrix(0.74131 0 0 0.74131 21.8278 15.0109)" stroke="#000" xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_2" y="47.88838" x="17.17071" stroke-width="0" fill="#ffffff">Button</text>
  <path id="svg_6" d="m31.45314,50.04491l-4.7695,-4.7695l4.76863,-4.7695l-2.4515,-2.45323l-4.7695,4.7695l-4.7695,-4.7695l-2.4515,2.45323l4.76863,4.7695l-4.7695,4.7695l2.45323,2.45237l4.76863,-4.7695l4.76863,4.7695" stroke-width="0" stroke="#000" fill="#ffffff"/>
 </g>

</svg>`,
    content: `<button class="p-2 bg-rose-600 hover:bg-rose-700 text-white rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>`,
  });
}
