export default function addAiCmdk(bm) {
    bm.add("ai-cmdk", {
        label: "AI Command Bar",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#f472b6"/><stop offset="1" stop-color="#38bdf8"/></linearGradient></defs>
  <path d="M9 6a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm6 0a3 3 0 1 0 3 3 3 3 0 0 0-3-3ZM9 15a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm6 0a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z" fill="#fff"/>
</svg>`,
        content: `<div class="flex min-h-screen items-start justify-center bg-gradient-to-b from-slate-900 to-slate-800 pt-32">
    <div class="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-violet-500/10">
        <div class="flex items-center gap-3 border-b border-white/10 px-5 py-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"/>
            </svg>
            <input type="text" placeholder="Ask Tailam anything..." class="flex-1 bg-transparent text-white placeholder-white/40 outline-none" />
            <kbd class="rounded-md border border-white/20 bg-white/10 px-2 py-0.5 text-xs text-white/60">⌘K</kbd>
        </div>
        <div class="p-2">
            <p class="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-white/40">Suggestions</p>
            <button class="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-white/5">
                <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-600 text-sm">✨</span>
                <span class="flex-1">
                    <span class="block text-sm font-medium text-white">Write a landing page headline</span>
                    <span class="block text-xs text-white/50">Copy, persuasion, SEO</span>
                </span>
            </button>
            <button class="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-white/5">
                <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-sm">🧠</span>
                <span class="flex-1">
                    <span class="block text-sm font-medium text-white">Summarize this document</span>
                    <span class="block text-xs text-white/50">Upload PDF, docx, or md</span>
                </span>
            </button>
            <button class="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-white/5">
                <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-sm">🐞</span>
                <span class="flex-1">
                    <span class="block text-sm font-medium text-white">Debug my API error</span>
                    <span class="block text-xs text-white/50">Paste a stack trace</span>
                </span>
            </button>
            <button class="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-white/5">
                <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-sm">🎨</span>
                <span class="flex-1">
                    <span class="block text-sm font-medium text-white">Design a dashboard mockup</span>
                    <span class="block text-xs text-white/50">Convert to Tailwind HTML</span>
                </span>
            </button>
        </div>
    </div>
</div>`,
    });
}
