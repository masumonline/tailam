export default function addGrid3x3(bm) {
    bm.add("grid3x3", {
        label: "Grid 3x3",
        category: "Tailwind Layours",
        media: `<svg width="100" height="100" viewBox="0 0 6 1" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid icon">
  <!-- Left block: col-span-3 -->
  <rect x="0" y="0" width="3" height="1" fill="#3b82f6" />
  <text x="1.5" y="0.7" font-family="Arial" font-size="0.7" fill="white" text-anchor="middle" alignment-baseline="middle">3</text>

  <!-- Right block: col-span-3 col-start-4 -->
  <rect x="3" y="0" width="3" height="1" fill="#f97316" />
  <text x="4.5" y="0.7" font-family="Arial" font-size="0.7" fill="white" text-anchor="middle" alignment-baseline="middle">3</text>
</svg>`,
        content: `<div class="grid grid-cols-6 grid-rows-1 gap-4">
    <div class="col-span-3 min-h-24"></div>
    <div class="col-span-3 min-h-24 col-start-4"></div>
</div>`,
    })
}
