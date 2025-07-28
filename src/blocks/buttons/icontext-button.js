export default function addIconTextButton(bm) {
  bm.add("tailwind-button7", {
    label: "Text With Icon",
    category: "Tailwind Buttons",
    media: `<svg width="100" height="100"><g id="Layer_1">
  <rect rx="10" fill="#009966" stroke="#000" stroke-width="0" x="10.5" y="30.5" width="79" height="30" id="svg_1"/>
  <text transform="matrix(0.74131 0 0 0.74131 21.8278 15.0109)" stroke="#000" xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_2" y="47.26651" x="21.31651" stroke-width="0" fill="#ffffff">Button</text>
  <path stroke="#000" id="svg_4" d="m24.27985,46.28933l2.92362,-1.3788l-5.65267,0l-5.65266,0l0,-0.85354l0,-0.85354l5.58781,0c3.07329,0 5.58781,-0.04326 5.58781,-0.09614c0,-0.05287 -1.22347,-0.67334 -2.71882,-1.3788l-2.71882,-1.28267l2.51302,0l2.51302,0l3.83794,1.8073l3.83794,1.8073l-3.8453,1.80385l-3.8453,1.80385l-2.6456,0l-2.64561,0l2.92363,-1.3788l0,0z" stroke-width="0" fill="#ffffff"/>
 </g>
</svg>`,
    content: `<button class="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">
  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  Continue
</button>
`,
  });
}
