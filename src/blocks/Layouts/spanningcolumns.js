export default function addSpanningColumns(bm) {
  bm.add("spanningcolumns", {
    label: "Spanning Columns",
    category: "Tailwind Layours",
    media: `<svg width="100" height="100" viewBox="0 0 6 2" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="2" height="1" fill="#155dfc" />
  <rect x="2" y="0" width="4" height="1" fill="#1c398e" />
  
  <rect x="0" y="1" width="4" height="1" fill="#1c398e" />
  <rect x="4" y="1" width="2" height="1" fill="#155dfc" />
    
  <rect x="0" y="2" width="2" height="1" fill="#155dfc" />
  <rect x="2" y="2" width="4" height="1" fill="#1c398e" />
</svg>
`,
    content: `<div class="grid grid-cols-3 xl:grid-cols-3 gap-4 px-4 py-4">
    <div class="w-full h-24 bg-blue-600 rounded-xl"></div>
    <div class="w-full h-24 bg-blue-900 rounded-xl col-span-2"></div>
    <div class="w-full h-24 bg-blue-900 rounded-xl col-span-2"></div>
    <div class="w-full h-24 bg-blue-600 rounded-xl"></div>
    <div class="w-full h-24 bg-blue-600 rounded-xl"></div>
    <div class="w-full h-24 bg-blue-900 rounded-xl col-span-2"></div>
</div>`,
  });
}
