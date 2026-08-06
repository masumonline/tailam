export default function addAiHero(bm) {
    bm.add("ai-hero", {
        label: "AI Hero",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#8b5cf6"/><stop offset="1" stop-color="#06b6d4"/></linearGradient></defs>
  <path d="M12 4c1.2 2.6 2.8 4.2 5.4 5.4-2.6 1.2-4.2 2.8-5.4 5.4-1.2-2.6-2.8-4.2-5.4-5.4C9.2 8.2 10.8 6.6 12 4Z" fill="#fff"/>
</svg>`,
        content: `<section class="relative overflow-hidden bg-gradient-to-br from-violet-950 via-indigo-900 to-cyan-900 text-white">
    <div class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl"></div>
    <div class="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl"></div>
    <div class="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center">
        <span class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
            <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
            Powered by GPT-4o
        </span>
        <h1 class="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Think beyond.
            <span class="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                Build smarter.
            </span>
        </h1>
        <p class="mt-6 max-w-2xl text-lg text-white/70">
            Ship production-ready AI features in minutes with a playground, prompt library,
            and one-click deploy. No ML PhD required.
        </p>
        <div class="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#" class="rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-500 px-8 py-3.5 font-semibold shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110">
                Start building free
            </a>
            <a href="#" class="rounded-xl border border-white/20 bg-white/10 px-8 py-3.5 font-semibold backdrop-blur transition hover:bg-white/20">
                Talk to an expert
            </a>
        </div>
        <div class="mt-12 flex flex-wrap items-center justify-center gap-2">
            <span class="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-3 py-1 text-xs font-semibold">Chat</span>
            <span class="rounded-full bg-gradient-to-r from-violet-500 to-purple-500 px-3 py-1 text-xs font-semibold">Vision</span>
            <span class="rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-3 py-1 text-xs font-semibold">Audio</span>
            <span class="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 text-xs font-semibold">Code</span>
            <span class="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-xs font-semibold">Embeddings</span>
        </div>
    </div>
</section>`,
    });
}
