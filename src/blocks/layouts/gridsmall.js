export default function addGridSmall(bm) {
    bm.add("gridsmall", {
        label: "6 Grid, 2 Rows",
        category: "Tailwind Layours",
        media: `<svg width="100" height="100" viewBox="0 0 6 2" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="1" height="1" fill="#fca5a5" />
  <rect x="1" y="0" width="1" height="1" fill="#fdba74" />
  <rect x="2" y="0" width="1" height="1" fill="#fcd34d" />
  <rect x="3" y="0" width="1" height="1" fill="#fde047" />
  <rect x="4" y="0" width="1" height="1" fill="#bef264" />
  <rect x="5" y="0" width="1" height="1" fill="#86efac" />
  <rect x="0" y="1" width="1" height="1" fill="#6ee7b7" />
  <rect x="1" y="1" width="1" height="1" fill="#5eead4" />
  <rect x="2" y="1" width="1" height="1" fill="#67e8f9" />
  <rect x="3" y="1" width="1" height="1" fill="#7dd3fc" />
  <rect x="4" y="1" width="1" height="1" fill="#93c5fd" />
  <rect x="5" y="1" width="1" height="1" fill="#a5b4fc" />
</svg>
`,
        content: `<div class="grid grid-cols-3 xl:grid-cols-6 gap-2 px-4 py-4">
    <div class="w-full h-24 bg-red-300 rounded-xl"></div>
    <div class="w-full h-24 bg-orange-300 rounded-xl"></div>
    <div class="w-full h-24 bg-amber-300 rounded-xl"></div>
    <div class="w-full h-24 bg-yellow-300 rounded-xl"></div>
    <div class="w-full h-24 bg-lime-300 rounded-xl"></div>
    <div class="w-full h-24 bg-green-300 rounded-xl"></div>
    <div class="w-full h-24 bg-emerald-300 rounded-xl"></div>
    <div class="w-full h-24 bg-teal-300 rounded-xl"></div>
    <div class="w-full h-24 bg-cyan-300 rounded-xl"></div>
    <div class="w-full h-24 bg-sky-300 rounded-xl"></div>
    <div class="w-full h-24 bg-blue-300 rounded-xl"></div>
    <div class="w-full h-24 bg-indigo-600 rounded-xl"></div>
</div>`,
    })
}
