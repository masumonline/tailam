export default function addCyanBlueButton(bm) {
  bm.add("tailwind-button-cyan", {
    label: "Cyan Blue Button",
    category: "Tailwind Buttons",
    media: `<svg width="100" height="100">
  <g id="Layer_1">
    <rect rx="10" fill="#07b2d9" stroke="#000" stroke-width="0" x="10.5" y="30.5" width="79" height="30" id="svg_1"/>
    <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="20" id="svg_2" y="52.03417" 
    x="19.03632" stroke-width="0" stroke="#000" fill="#ffffff">Button</text>
    </g>
    </svg>`,
    content: `<button class="bg-[#07B2D9] hover:bg-[#069ec3] text-white font-semibold py-2 px-4 rounded-lg">
      Cyan Blue Button
    </button>`,
  });
}

