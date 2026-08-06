export default function addAiVoice(bm) {
    bm.add("ai-voice", {
        label: "AI Voice Card",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#60a5fa"/><stop offset="1" stop-color="#a855f7"/></linearGradient></defs>
  <path d="M12 3a4 4 0 0 1 4 4v5a4 4 0 0 1-8 0V7a4 4 0 0 1 4-4Zm-5 9a5 5 0 0 0 10 0h2a7 7 0 0 1-6 6.92V21h3v2H8v-2h3v-2.08A7 7 0 0 1 5 12h2Z" fill="#fff"/>
</svg>`,
        content: `<div class="max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 p-6 shadow-2xl shadow-blue-500/10">
    <div class="flex items-center gap-4">
        <div class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3a4 4 0 0 1 4 4v5a4 4 0 0 1-8 0V7a4 4 0 0 1 4-4Zm-5 9a5 5 0 0 0 10 0h2a7 7 0 0 1-6 6.92V21h3v2H8v-2h3v-2.08A7 7 0 0 1 5 12h2Z"/>
            </svg>
        </div>
        <div class="flex-1">
            <p class="font-semibold text-white">Nova · Eleven-Labs voice</p>
            <p class="text-xs text-white/50">Converting text to speech…</p>
        </div>
        <span class="animate-pulse rounded-full bg-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-400">● Live</span>
    </div>
    <div class="mt-6 flex items-center gap-3">
        <button class="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <div class="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
            <div class="h-full w-2/3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"></div>
        </div>
        <span class="text-xs text-white/50">1:24 / 2:00</span>
    </div>
    <div class="mt-4 flex items-center gap-2 text-xs text-white/50">
        <span class="rounded-full bg-white/10 px-2.5 py-1">Natural</span>
        <span class="rounded-full bg-white/10 px-2.5 py-1">Multilingual</span>
        <span class="rounded-full bg-white/10 px-2.5 py-1">Clone</span>
    </div>
</div>`,
    });
}
