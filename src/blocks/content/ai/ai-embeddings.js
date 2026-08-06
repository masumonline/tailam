export default function addAiEmbeddings(bm) {
    bm.add("ai-embeddings", {
        label: "AI Embeddings Viz",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#2dd4bf"/><stop offset="1" stop-color="#818cf8"/></linearGradient></defs>
  <circle cx="12" cy="12" r="4" fill="#fff"/><circle cx="6" cy="6" r="2" fill="#fff" opacity=".6"/><circle cx="18" cy="6" r="2" fill="#fff" opacity=".6"/><circle cx="6" cy="18" r="2" fill="#fff" opacity=".6"/><circle cx="18" cy="18" r="2" fill="#fff" opacity=".6"/>
</svg>`,
        content: `<div class="max-w-2xl rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-teal-500/10">
    <div class="mb-5 flex items-center justify-between">
        <div>
            <h3 class="font-bold text-white">Semantic Map</h3>
            <p class="text-xs text-white/50">1536-dim embeddings projected to 2D</p>
        </div>
        <span class="rounded-full bg-teal-500/20 px-3 py-1 text-xs font-semibold text-teal-300">12,400 vectors</span>
    </div>
    <div class="relative h-64 overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900">
        <div class="absolute h-3 w-3 rounded-full bg-fuchsia-500 shadow-lg shadow-fuchsia-500/50" style="left: 15%; top: 30%"></div>
        <div class="absolute h-3 w-3 rounded-full bg-fuchsia-500 shadow-lg shadow-fuchsia-500/50" style="left: 22%; top: 41%"></div>
        <div class="absolute h-3 w-3 rounded-full bg-fuchsia-500 shadow-lg shadow-fuchsia-500/50" style="left: 19%; top: 52%"></div>
        <div class="absolute h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" style="left: 55%; top: 22%"></div>
        <div class="absolute h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" style="left: 61%; top: 31%"></div>
        <div class="absolute h-3 w-3 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50" style="left: 42%; top: 60%"></div>
        <div class="absolute h-3 w-3 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50" style="left: 50%; top: 67%"></div>
        <div class="absolute h-3 w-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" style="left: 74%; top: 55%"></div>
        <div class="absolute h-3 w-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" style="left: 80%; top: 63%"></div>
        <div class="absolute h-3 w-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" style="left: 70%; top: 70%"></div>
        <div class="absolute h-3 w-3 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" style="left: 30%; top: 74%"></div>
        <div class="absolute h-3 w-3 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" style="left: 36%; top: 82%"></div>
    </div>
    <div class="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
        <span class="flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-fuchsia-500"></span> Support</span>
        <span class="flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-emerald-400"></span> Marketing</span>
        <span class="flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-amber-400"></span> Docs</span>
        <span class="flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-cyan-400"></span> Code</span>
    </div>
</div>`,
    });
}
