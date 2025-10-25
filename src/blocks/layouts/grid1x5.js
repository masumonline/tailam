export default function addGrid2x5(bm) {
    bm.add("grid1x5", {
        label: "Grid 1x5",
        category: "Tailwind Layours",
        media: `<svg width="100" height="100" viewBox="0 0 6 1">
    <rect x="0" y="0" width="2" height="1" fill="#3b82f6" />
    <text x="1" y="0.7" font-family="Arial" font-size="0.7" fill="white" text-anchor="middle" alignment-baseline="middle">1</text>
    <rect x="2" y="0" width="4" height="1" fill="#f97316" />
    <text x="4" y="0.7" font-family="Arial" font-size="0.7" fill="white" text-anchor="middle" alignment-baseline="middle">5</text>
</svg>`,
        content: `<div class="grid grid-cols-6 grid-rows-1 gap-4">
    <div class="col-span-1">1</div>
    <div class="col-span-5 col-start-2">5</div>
</div>`,
    })
}
