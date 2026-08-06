export default function addAiCta(bm) {
    bm.add("ai-cta", {
        label: "AI Newsletter CTA",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#22d3ee"/><stop offset="1" stop-color="#6366f1"/></linearGradient></defs>
  <path d="M4 6h16v12H4V6Zm2 2l6 4 6-4v-1l-6 4-6-4v1Z" fill="#fff"/>
</svg>`,
        content: `<section class="bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 px-6 py-16">
    <div class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 rounded-3xl bg-white/10 p-8 backdrop-blur-lg sm:flex-row sm:p-12">
        <div class="text-center sm:text-left">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">Get the AI weekly</h2>
            <p class="mt-3 max-w-md text-white/80">
                One email every Tuesday with model updates, best practices, and fresh ideas from the Tailam team.
            </p>
        </div>
        <form class="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:rounded-full sm:bg-white/20 sm:p-1.5">
            <input type="email" placeholder="you@company.com" class="flex-1 rounded-full bg-white px-5 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none sm:bg-transparent sm:text-white sm:placeholder-white/60" />
            <button class="rounded-full bg-white px-6 py-3 text-sm font-bold text-indigo-700 shadow-lg transition hover:bg-indigo-50">Subscribe</button>
        </form>
    </div>
</section>`,
    });
}
