export default function addSpanningRows(bm) {
    bm.add("spanningrows", {
        label: "Spanning Rows",
        category: "Tailwind Layours",
        media: `<svg width="100" height="100" viewBox="0 0 6 2" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="2" height="2" fill="#1c398e" />
  
  <rect x="2" y="0" width="4" height="1" fill="#05133bff" />
  <rect x="2" y="1" width="4" height="1" fill="#155dfc" />
</svg>
`,
        content: `<div class="grid grid-rows-3 grid-flow-col gap-4 px-4 py-4 leading-10">
    <div class="p-4 w-full bg-blue-900 rounded-xl row-span-3"></div>
    <div class="p-4 w-full bg-blue-800 rounded-xl col-span-2"></div>
    <div class="p-4 w-full bg-blue-700 rounded-xl row-span-2 col-span-2"></div>
</div>`,
    })
}
