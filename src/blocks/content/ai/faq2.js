export default function addFaq2(bm) {
    bm.add("faq2", {
        label: "Faq 2",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#34d399"/><stop offset="1" stop-color="#38bdf8"/></linearGradient></defs>
  <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.3" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17" r="1" fill="#fff"/>
</svg>`,
        content: `<section class="bg-slate-50 py-16">
    <div class="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-5">
        <div class="lg:col-span-2">
            <span class="text-sm font-bold uppercase tracking-wider text-emerald-600">Support</span>
            <h2 class="mt-2 text-3xl font-extrabold text-slate-900">Questions? We've got answers.</h2>
            <p class="mt-4 text-slate-600">Can't find what you're looking for? Chat with our AI support agent, 24/7.</p>
            <a href="#" class="mt-6 inline-block rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:brightness-110">Chat with us</a>
        </div>
        <div class="lg:col-span-3">
            <div class="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <details class="group p-6" open>
                    <summary class="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                        How long does fine-tuning take?
                        <span class="text-emerald-500 transition group-open:rotate-45">＋</span>
                    </summary>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">A typical fine-tune on 10k samples finishes in 2-4 hours. You can monitor loss and accuracy live in the dashboard.</p>
                </details>
                <details class="group p-6">
                    <summary class="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                        Which models can I fine-tune?
                        <span class="text-emerald-500 transition group-open:rotate-45">＋</span>
                    </summary>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">Nova Flash and Nova Pro are fully fine-tunable. Nova Max supports LoRA adapters on the enterprise plan.</p>
                </details>
                <details class="group p-6">
                    <summary class="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                        Do you offer discounts for startups?
                        <span class="text-emerald-500 transition group-open:rotate-45">＋</span>
                    </summary>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">Yes — early-stage startups get 50% off the Pro plan for the first six months. Just apply through the dashboard.</p>
                </details>
            </div>
        </div>
    </div>
</section>`,
    });
}
