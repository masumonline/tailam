export default function addGrid4x2(bm) {
    bm.add("grid4x2", {
        label: "Grid 4x2",
        category: "Tailwind Layours",
        media: `<svg width="100" height="100" viewBox="0 0 6 1">
    <rect x="0" y="0" width="4" height="1" fill="#3b82f6" />
    <text x="2" y="0.7" font-family="Arial" font-size="0.7" fill="white" text-anchor="middle" alignment-baseline="middle">4</text>
    <rect x="3" y="0" width="4" height="1" fill="#f97316" />
    <text x="5" y="0.7" font-family="Arial" font-size="0.7" fill="white" text-anchor="middle" alignment-baseline="middle">2</text>
</svg>`,
        content: `<div class="grid grid-cols-6 grid-rows-1 gap-4">
    <div class="col-span-4 min-h-24"></div>
    <div class="col-span-2 min-h-24 col-start-5"></div>
</div>`,
    })
}
