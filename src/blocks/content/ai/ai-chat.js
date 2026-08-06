export default function addAiChat(bm) {
    bm.add("ai-chat", {
        label: "AI Chat Widget",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#f472b6"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs>
  <path d="M5 4h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-7l-4 4v-4H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" fill="#fff"/>
</svg>`,
        content: `<div class="max-w-md w-full rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl shadow-purple-500/10">
    <div class="flex items-center gap-3 border-b border-white/10 px-5 py-4">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"/>
            </svg>
        </div>
        <div>
            <p class="font-semibold text-white">Tailam Assistant</p>
            <p class="text-xs text-emerald-400">● Online</p>
        </div>
    </div>
    <div class="space-y-4 px-5 py-6">
        <div class="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2.5 text-sm text-white/90">
            Hi! I'm your AI copilot. What can I help you build today?
        </div>
        <div class="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-fuchsia-500 to-violet-500 px-4 py-2.5 text-sm text-white shadow-lg shadow-fuchsia-500/20">
            Design a landing page for my new SaaS product.
        </div>
        <div class="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2.5 text-sm text-white/90">
            On it. I'll scaffold a hero, feature grid, and pricing section with a violet-on-dark theme. Ready to drag and drop.
        </div>
    </div>
    <div class="flex items-center gap-3 border-t border-white/10 px-5 py-4">
        <input type="text" placeholder="Message Tailam..." class="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-fuchsia-400" />
        <button class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2Zm0 0v-8"/>
            </svg>
        </button>
    </div>
</div>`,
    });
}
