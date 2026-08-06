export default function addAiTestimonial(bm) {
    bm.add("ai-testimonial", {
        label: "AI Testimonials",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#fbbf24"/><stop offset="1" stop-color="#fb7185"/></linearGradient></defs>
  <path d="M6 11V9a4 4 0 0 1 4-4h1v2H10a2 2 0 0 0-2 2v4H4v-2h2Zm12 0V9a4 4 0 0 0-4-4h-1v2h1a2 2 0 0 1 2 2v4h-4v-2h2Zm-8 4v2h4v-2H10Z" fill="#fff"/>
</svg>`,
        content: `<section class="bg-gradient-to-b from-white to-slate-50 py-16">
    <div class="mx-auto max-w-5xl px-6">
        <div class="mb-10 text-center">
            <span class="text-sm font-bold uppercase tracking-wider text-transparent bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text">Loved by builders</span>
            <h2 class="mt-2 text-3xl font-extrabold text-slate-900">Teams ship with Tailam AI</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
                <div class="mb-3 text-amber-400">★★★★★</div>
                <p class="text-sm text-slate-600">"Cut our support ticket resolution time by 60%. The AI actually understands our product."</p>
                <div class="mt-5 flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-rose-500 font-bold text-white">MK</div>
                    <div>
                        <p class="text-sm font-semibold text-slate-900">Maya Khan</p>
                        <p class="text-xs text-slate-400">VP Support, Loop</p>
                    </div>
                </div>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
                <div class="mb-3 text-amber-400">★★★★★</div>
                <p class="text-sm text-slate-600">"We replaced three vendors with one API. Response quality is indistinguishable from human."</p>
                <div class="mt-5 flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 font-bold text-white">JT</div>
                    <div>
                        <p class="text-sm font-semibold text-slate-900">James Tran</p>
                        <p class="text-xs text-slate-400">CTO, Brightly</p>
                    </div>
                </div>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
                <div class="mb-3 text-amber-400">★★★★★</div>
                <p class="text-sm text-slate-600">"The playground and prompt library made our first AI feature shippable in a week."</p>
                <div class="mt-5 flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 font-bold text-white">SL</div>
                    <div>
                        <p class="text-sm font-semibold text-slate-900">Sofia Lopez</p>
                        <p class="text-xs text-slate-400">Product Lead, Nimbus</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`,
    });
}
