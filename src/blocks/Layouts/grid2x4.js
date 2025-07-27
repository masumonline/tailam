export default function addGrid2x4(bm) {
  bm.add("grid2x4", {
    label: "Grid 2x4",
    category: "Tailwind Layours",
    media: `<svg width="100" height="100" viewBox="0 0 6 1" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid icon">
  <!-- Left block: col-span-2 -->
  <rect x="0" y="0" width="2" height="1" fill="#3b82f6" />
  <text x="1.5" y="0.7" font-family="Arial" font-size="0.7" fill="white" text-anchor="middle" alignment-baseline="middle">2</text>

  <!-- Right block: col-span-4 col-start-3 -->
  <rect x="2" y="0" width="4" height="1" fill="#f97316" />
  <text x="3.5" y="0.7" font-family="Arial" font-size="0.7" fill="white" text-anchor="middle" alignment-baseline="middle">4</text>
</svg>`,
    content: `<div class="grid grid-cols-6 grid-rows-1 gap-4">
    <div class="col-span-2">2</div>
    <div class="col-span-4 col-start-3">4</div>
</div>`,
  });
}
