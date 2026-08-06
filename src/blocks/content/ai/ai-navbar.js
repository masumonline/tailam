export default function addAiNavbar(bm) {
    bm.add("ai-navbar", {
        label: "AI Navbar",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#818cf8"/><stop offset="1" stop-color="#c026d3"/></linearGradient></defs>
  <path d="M4 6h16M4 12h10M4 18h16" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
</svg>`,
        content: `<nav class="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div class="flex items-center gap-2">
            <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-lg shadow-fuchsia-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4c1.2 2.6 2.8 4.2 5.4 5.4-2.6 1.2-4.2 2.8-5.4 5.4-1.2-2.6-2.8-4.2-5.4-5.4C9.2 8.2 10.8 6.6 12 4Z"/>
                </svg>
            </div>
            <span class="text-lg font-bold text-white">Tailam<span class="text-fuchsia-400">AI</span></span>
        </div>
        <div class="hidden items-center gap-8 text-sm font-medium text-white/70 lg:flex">
            <a href="#" class="transition hover:text-white">Product</a>
            <a href="#" class="transition hover:text-white">Pricing</a>
            <a href="#" class="transition hover:text-white">Docs</a>
            <a href="#" class="transition hover:text-white">Changelog</a>
        </div>
        <div class="flex items-center gap-3">
            <a href="#" class="text-sm font-medium text-white/70 transition hover:text-white">Sign in</a>
            <a href="#" class="rounded-lg bg-gradient-to-r from-fuchsia-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110">Get started</a>
        </div>
    </div>
</nav>`,
    });
}
