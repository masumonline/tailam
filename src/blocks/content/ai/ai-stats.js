export default function addAiStats(bm) {
    bm.add("ai-stats", {
        label: "AI Stats Band",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#34d399"/><stop offset="1" stop-color="#f472b6"/></linearGradient></defs>
  <path d="M4 17l5-6 4 4 7-8" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="20" cy="6" r="2" fill="#fff"/>
</svg>`,
        content: `<section class="relative overflow-hidden bg-gradient-to-r from-violet-950 via-indigo-950 to-fuchsia-950 py-14">
    <div class="absolute -left-20 top-0 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl"></div>
    <div class="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-fuchsia-600/20 blur-3xl"></div>
    <div class="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center text-white lg:grid-cols-4">
        <div>
            <p class="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-4xl font-extrabold text-transparent">3.2B</p>
            <p class="mt-2 text-sm text-white/60">Tokens generated / day</p>
        </div>
        <div>
            <p class="bg-gradient-to-r from-fuchsia-300 to-pink-300 bg-clip-text text-4xl font-extrabold text-transparent">120ms</p>
            <p class="mt-2 text-sm text-white/60">Median latency</p>
        </div>
        <div>
            <p class="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-4xl font-extrabold text-transparent">99.99%</p>
            <p class="mt-2 text-sm text-white/60">Uptime SLA</p>
        </div>
        <div>
            <p class="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-4xl font-extrabold text-transparent">40k+</p>
            <p class="mt-2 text-sm text-white/60">Teams building</p>
        </div>
    </div>
</section>`,
    });
}
