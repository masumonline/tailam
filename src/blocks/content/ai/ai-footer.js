export default function addAiFooter(bm) {
    bm.add("ai-footer", {
        label: "AI Footer",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#312e81"/><stop offset="1" stop-color="#7e22ce"/></linearGradient></defs>
  <path d="M4 6h16M4 10h16M4 14h9M4 18h16" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
</svg>`,
        content: `<footer class="bg-slate-950 text-white">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
            <div class="flex items-center gap-2">
                <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4c1.2 2.6 2.8 4.2 5.4 5.4-2.6 1.2-4.2 2.8-5.4 5.4-1.2-2.6-2.8-4.2-5.4-5.4C9.2 8.2 10.8 6.6 12 4Z"/></svg>
                </div>
                <span class="text-lg font-bold">Tailam<span class="text-fuchsia-400">AI</span></span>
            </div>
            <p class="mt-4 max-w-xs text-sm text-white/50">The developer platform for building with AI. Reliable, fast, and beautifully simple.</p>
            <div class="mt-5 flex gap-3">
                <a href="#" class="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition hover:bg-white/20">𝕏</a>
                <a href="#" class="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition hover:bg-white/20">GH</a>
                <a href="#" class="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition hover:bg-white/20">in</a>
            </div>
        </div>
        <div>
            <h4 class="mb-4 text-sm font-semibold text-white/90">Product</h4>
            <ul class="space-y-2.5 text-sm text-white/50">
                <li><a href="#" class="transition hover:text-white">Features</a></li>
                <li><a href="#" class="transition hover:text-white">Pricing</a></li>
                <li><a href="#" class="transition hover:text-white">Models</a></li>
                <li><a href="#" class="transition hover:text-white">Changelog</a></li>
            </ul>
        </div>
        <div>
            <h4 class="mb-4 text-sm font-semibold text-white/90">Developers</h4>
            <ul class="space-y-2.5 text-sm text-white/50">
                <li><a href="#" class="transition hover:text-white">Documentation</a></li>
                <li><a href="#" class="transition hover:text-white">API reference</a></li>
                <li><a href="#" class="transition hover:text-white">Status</a></li>
                <li><a href="#" class="transition hover:text-white">Open source</a></li>
            </ul>
        </div>
        <div>
            <h4 class="mb-4 text-sm font-semibold text-white/90">Stay in the loop</h4>
            <p class="text-sm text-white/50">Get the AI weekly. No spam, ever.</p>
            <div class="mt-3 flex overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <input type="email" placeholder="you@email.com" class="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none" />
                <button class="bg-gradient-to-r from-fuchsia-500 to-violet-500 px-4 text-sm font-semibold transition hover:brightness-110">Join</button>
            </div>
        </div>
    </div>
    <div class="border-t border-white/10">
        <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/40 sm:flex-row">
            <p>© 2026 Tailam AI, Inc. All rights reserved.</p>
            <div class="flex gap-5">
                <a href="#" class="transition hover:text-white">Privacy</a>
                <a href="#" class="transition hover:text-white">Terms</a>
                <a href="#" class="transition hover:text-white">Security</a>
            </div>
        </div>
    </div>
</footer>`,
    });
}
