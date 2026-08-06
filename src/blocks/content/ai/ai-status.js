export default function addAiStatus(bm) {
    bm.add("ai-status", {
        label: "AI API Status",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#34d399"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs>
  <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2"/><path d="M12 7v5l3 3" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
</svg>`,
        content: `<div class="max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-emerald-500/10">
    <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
            <span class="relative flex h-3 w-3">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
            </span>
            <h3 class="font-bold text-white">All systems operational</h3>
        </div>
        <span class="text-xs text-white/40">Last 90 days</span>
    </div>
    <div class="mt-6 space-y-3">
        <div class="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
            <span class="text-sm text-white/80">API · chat completions</span>
            <span class="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">Operational</span>
        </div>
        <div class="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
            <span class="text-sm text-white/80">Embeddings</span>
            <span class="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">Operational</span>
        </div>
        <div class="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
            <span class="text-sm text-white/80">Fine-tuning jobs</span>
            <span class="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">Operational</span>
        </div>
        <div class="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
            <span class="text-sm text-white/80">Image generation</span>
            <span class="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-semibold text-amber-400">Degraded perf</span>
        </div>
        <div class="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
            <span class="text-sm text-white/80">Voice synthesis</span>
            <span class="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">Operational</span>
        </div>
    </div>
    <div class="mt-6">
        <div class="mb-2 flex items-center justify-between text-xs text-white/50">
            <span>Uptime · 99.99%</span>
            <span class="flex items-center gap-1"><span class="h-2 w-2 rounded-full bg-emerald-400"></span> 99.9%</span>
        </div>
        <div class="flex h-8 items-end gap-1">
            <div class="h-6 flex-1 rounded-sm bg-emerald-400/80"></div>
            <div class="h-8 flex-1 rounded-sm bg-emerald-400"></div>
            <div class="h-7 flex-1 rounded-sm bg-emerald-400/90"></div>
            <div class="h-5 flex-1 rounded-sm bg-amber-400"></div>
            <div class="h-8 flex-1 rounded-sm bg-emerald-400"></div>
            <div class="h-7 flex-1 rounded-sm bg-emerald-400/90"></div>
            <div class="h-8 flex-1 rounded-sm bg-emerald-400"></div>
        </div>
    </div>
</div>`,
    });
}
