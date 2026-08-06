export default function addAiFinetune(bm) {
    bm.add("ai-finetune", {
        label: "AI Fine-tune Progress",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#fb923c"/><stop offset="1" stop-color="#ef4444"/></linearGradient></defs>
  <path d="M12 3l3 3-3 3-3-3 3-3Zm0 12l3 3-3 3-3-3 3-3Zm9-3l-3 3-3-3 3-3 3 3ZM6 9l-3 3 3 3 3-3-3-3Z" fill="#fff"/>
</svg>`,
        content: `<div class="max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-orange-500/10">
    <div class="flex items-center justify-between">
        <div>
            <h3 class="font-bold text-white">Fine-tune: support-agent-v3</h3>
            <p class="text-xs text-white/50">Base model · nova-8b</p>
        </div>
        <span class="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400">● Training</span>
    </div>
    <div class="mt-6">
        <div class="mb-2 flex justify-between text-sm">
            <span class="text-white/60">Epoch 2 of 3</span>
            <span class="font-semibold text-orange-400">72%</span>
        </div>
        <div class="h-3 overflow-hidden rounded-full bg-white/10">
            <div class="h-full w-[72%] rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all"></div>
        </div>
    </div>
    <div class="mt-6 grid grid-cols-3 gap-3 text-center">
        <div class="rounded-xl bg-white/5 px-3 py-3">
            <p class="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-lg font-bold text-transparent">0.032</p>
            <p class="mt-0.5 text-xs text-white/50">Loss</p>
        </div>
        <div class="rounded-xl bg-white/5 px-3 py-3">
            <p class="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-lg font-bold text-transparent">96.4%</p>
            <p class="mt-0.5 text-xs text-white/50">Accuracy</p>
        </div>
        <div class="rounded-xl bg-white/5 px-3 py-3">
            <p class="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-lg font-bold text-transparent">3h 12m</p>
            <p class="mt-0.5 text-xs text-white/50">Remaining</p>
        </div>
    </div>
    <div class="mt-6 flex items-center justify-between text-xs text-white/40">
        <span>Dataset · 18,400 samples</span>
        <span>GPU · H100 × 4</span>
    </div>
</div>`,
    });
}
