export default function addAiUpload(bm) {
    bm.add("ai-upload", {
        label: "AI Upload Modal",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#38bdf8"/><stop offset="1" stop-color="#818cf8"/></linearGradient></defs>
  <path d="M12 16V4m0 0L7 9m5-5l5 5m-9 8H6a2 2 0 0 0-2 2v2h16v-2a2 2 0 0 0-2-2h-2" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
        content: `<div class="flex min-h-screen items-center justify-center bg-slate-900/95 px-6">
    <div class="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-2xl shadow-sky-500/10">
        <h3 class="text-lg font-bold text-white">Ask your documents</h3>
        <p class="mt-1 text-sm text-white/50">Upload up to 20 files. We'll index and answer from them.</p>
        <label class="mt-6 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-sky-400/40 bg-sky-500/10 px-6 py-10 text-center transition hover:border-sky-400 hover:bg-sky-500/20">
            <span class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 shadow-lg shadow-sky-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16V4m0 0L7 9m5-5l5 5m-9 8H6a2 2 0 0 0-2 2v2h16v-2a2 2 0 0 0-2-2h-2"/>
                </svg>
            </span>
            <span class="text-sm font-semibold text-white">Drop files or click to browse</span>
            <span class="text-xs text-white/40">PDF, DOCX, MD, XLSX · max 50MB each</span>
            <input type="file" multiple class="hidden" />
        </label>
        <div class="mt-5 space-y-2">
            <div class="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
                <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/20 text-xs font-bold text-rose-400">PDF</span>
                <div class="flex-1">
                    <p class="text-sm font-medium text-white">quarterly-report.pdf</p>
                    <div class="mt-1 h-1 overflow-hidden rounded-full bg-white/10"><div class="h-full w-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-500"></div></div>
                </div>
                <span class="text-xs text-emerald-400">✓ Done</span>
            </div>
            <div class="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
                <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/20 text-xs font-bold text-sky-400">MD</span>
                <div class="flex-1">
                    <p class="text-sm font-medium text-white">api-docs.md</p>
                    <div class="mt-1 h-1 overflow-hidden rounded-full bg-white/10"><div class="h-full w-3/4 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500"></div></div>
                </div>
                <span class="text-xs text-sky-400">Indexing…</span>
            </div>
        </div>
        <button class="mt-6 w-full rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:brightness-110">Start asking</button>
    </div>
</div>`,
    });
}
