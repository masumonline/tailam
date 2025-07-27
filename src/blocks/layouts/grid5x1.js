export default function addGrid5x1(bm) {
  bm.add("grid5x1", {
    label: "Grid 5x1",
    category: "Tailwind Layours",
    media: `<svg width="100" height="100" viewBox="0 0 6 1">
    <rect x="0" y="0" width="4" height="1" fill="#3b82f6" />
    <text x="1" y="0.7" font-family="Arial" font-size="0.7" fill="white" text-anchor="middle" alignment-baseline="middle">5</text>
    <rect x="4" y="0" width="4" height="1" fill="#f97316" />
    <text x="5" y="0.7" font-family="Arial" font-size="0.7" fill="white" text-anchor="middle" alignment-baseline="middle">1</text>
</svg>`,
    content: `<div class="grid grid-cols-6 grid-rows-1 gap-4">
    <div class="col-span-5">5</div>
    <div class="col-start-6">1</div>
</div>`,
  });
}
