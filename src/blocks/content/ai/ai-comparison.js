export default function addAiComparison(bm) {
    bm.add("ai-comparison", {
        label: "AI Model Comparison",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#22c55e"/><stop offset="1" stop-color="#06b6d4"/></linearGradient></defs>
  <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2h6v5H5V7Zm8 0h6v5h-6V7Z" fill="#fff"/>
</svg>`,
        content: `<section class="bg-gradient-to-b from-slate-900 to-slate-800 py-16 text-white">
    <div class="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-emerald-500/10">
        <div class="grid grid-cols-3 border-b border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold">
            <span>Model</span>
            <span class="text-center">Speed</span>
            <span class="text-center">Quality</span>
        </div>
        <div class="grid grid-cols-3 items-center border-b border-white/5 px-6 py-5">
            <span class="flex items-center gap-3">
                <span class="h-3 w-3 rounded-full bg-emerald-400"></span>
                <span class="font-semibold">Nova Flash</span>
            </span>
            <span class="text-center text-sm text-emerald-400">★ 4.9</span>
            <span class="text-center text-sm text-emerald-400">★ 4.6</span>
        </div>
        <div class="grid grid-cols-3 items-center border-b border-white/5 px-6 py-5">
            <span class="flex items-center gap-3">
                <span class="h-3 w-3 rounded-full bg-cyan-400"></span>
                <span class="font-semibold">Nova Pro</span>
            </span>
            <span class="text-center text-sm text-amber-400">★ 4.3</span>
            <span class="text-center text-sm text-amber-400">★ 4.9</span>
        </div>
        <div class="grid grid-cols-3 items-center px-6 py-5">
            <span class="flex items-center gap-3">
                <span class="h-3 w-3 rounded-full bg-fuchsia-400"></span>
                <span class="font-semibold">Nova Max</span>
            </span>
            <span class="text-center text-sm text-rose-400">★ 3.9</span>
            <span class="text-center text-sm text-rose-400">★ 5.0</span>
        </div>
    </div>
    <p class="mt-6 text-center text-sm text-white/50">Pick the model that fits your budget and latency needs.</p>
</section>`,
    });
}
