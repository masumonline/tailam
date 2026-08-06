export default function addAiImagegen(bm) {
    bm.add("ai-imagegen", {
        label: "AI Image Generator",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#c084fc"/><stop offset="1" stop-color="#f472b6"/></linearGradient></defs>
  <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm2 13l4-5 3 3 3-4 3 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
        content: `<div class="max-w-md overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-fuchsia-500/10">
    <div class="relative">
        <div class="h-56 w-full bg-gradient-to-br from-fuchsia-500 via-violet-600 to-cyan-500"></div>
        <div class="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
        <span class="absolute left-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">✨ Aurora Fox</span>
        <span class="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">1024×1024</span>
    </div>
    <div class="p-5">
        <p class="text-sm font-medium text-white">Prompt</p>
        <p class="mt-1 text-sm text-white/60">"A luminous fox made of northern lights, cyberpunk forest, volumetric fog, 8k"</p>
        <div class="mt-4 flex items-center justify-between">
            <div class="flex gap-2">
                <button class="rounded-lg bg-gradient-to-r from-fuchsia-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110">Regenerate</button>
                <button class="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20">Download</button>
            </div>
            <span class="text-xs text-white/40">0.8s · DALL·E 4</span>
        </div>
    </div>
</div>`,
    });
}
