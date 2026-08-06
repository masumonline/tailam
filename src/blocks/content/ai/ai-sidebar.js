export default function addAiSidebar(bm) {
    bm.add("ai-sidebar", {
        label: "AI Sidebar",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#818cf8"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs>
  <path d="M5 4h6v16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm8 0h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6V4Z" fill="#fff"/>
</svg>`,
        content: `<div class="flex min-h-screen bg-slate-50">
    <aside class="flex w-72 flex-col bg-slate-900 text-white">
        <div class="flex items-center gap-2 border-b border-white/10 px-5 py-4">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4c1.2 2.6 2.8 4.2 5.4 5.4-2.6 1.2-4.2 2.8-5.4 5.4-1.2-2.6-2.8-4.2-5.4-5.4C9.2 8.2 10.8 6.6 12 4Z"/></svg>
            </div>
            <span class="font-bold">Tailam AI</span>
        </div>
        <button class="mx-4 mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2.5 text-sm font-semibold shadow-lg shadow-indigo-500/30 transition hover:brightness-110">
            ＋ New chat
        </button>
        <nav class="mt-6 flex-1 space-y-1 px-3">
            <p class="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-white/40">History</p>
            <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/10 hover:text-white">
                <span class="h-2 w-2 rounded-full bg-emerald-400"></span> Landing page copy
            </a>
            <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/10 hover:text-white">
                <span class="h-2 w-2 rounded-full bg-amber-400"></span> API error debug
            </a>
            <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/10 hover:text-white">
                <span class="h-2 w-2 rounded-full bg-sky-400"></span> Product roadmap
            </a>
        </nav>
        <div class="border-t border-white/10 p-4">
            <button class="flex w-full items-center gap-3 rounded-xl bg-white/5 px-3 py-3 transition hover:bg-white/10">
                <div class="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 font-bold text-xs">AK</div>
                <span class="flex-1 text-left">
                    <span class="block text-sm font-medium">Alex Kim</span>
                    <span class="block text-xs text-white/40">Pro plan</span>
                </span>
                <span class="text-white/40">⋯</span>
            </button>
        </div>
    </aside>
    <main class="flex flex-1 items-center justify-center bg-gradient-to-br from-slate-100 via-white to-indigo-50 px-6">
        <div class="max-w-md text-center">
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4c1.2 2.6 2.8 4.2 5.4 5.4-2.6 1.2-4.2 2.8-5.4 5.4-1.2-2.6-2.8-4.2-5.4-5.4C9.2 8.2 10.8 6.6 12 4Z"/></svg>
            </div>
            <h2 class="text-xl font-bold text-slate-900">How can I help today?</h2>
            <p class="mt-2 text-sm text-slate-500">Ask anything — from code to marketing to strategy.</p>
            <div class="mt-6 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm focus-within:border-indigo-400">
                <input type="text" placeholder="Ask Tailam..." class="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none" />
                <button class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white transition hover:brightness-110">➤</button>
            </div>
        </div>
    </main>
</div>`,
    });
}
