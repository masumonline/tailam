export default function addFaq4(bm) {
    bm.add("faq4", {
        label: "Faq 4",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#60a5fa"/><stop offset="1" stop-color="#c084fc"/></linearGradient></defs>
  <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.3" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17" r="1" fill="#fff"/>
</svg>`,
        content: `<section class="bg-slate-900 py-16 text-white">
    <div class="mx-auto max-w-3xl px-6">
        <div class="mb-10 flex items-end justify-between">
            <div>
                <h2 class="text-3xl font-extrabold">FAQ</h2>
                <p class="mt-2 text-white/50">Common questions, answered.</p>
            </div>
            <span class="hidden rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white/60 sm:block">24 answers</span>
        </div>
        <div class="space-y-2.5">
            <details class="group border border-white/10 bg-white/5 transition hover:bg-white/10" open>
                <summary class="flex cursor-pointer items-center justify-between px-5 py-4 font-medium text-white/90">
                    <span class="flex items-center gap-3"><span class="text-sm font-bold text-sky-400">01</span>How does the free trial work?</span>
                    <span class="text-sky-400 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="px-5 pb-4 pl-14 text-sm text-white/60">14 days of full Pro features, no credit card required. Convert whenever you're ready.</p>
            </details>
            <details class="group border border-white/10 bg-white/5 transition hover:bg-white/10">
                <summary class="flex cursor-pointer items-center justify-between px-5 py-4 font-medium text-white/90">
                    <span class="flex items-center gap-3"><span class="text-sm font-bold text-sky-400">02</span>Can I cancel anytime?</span>
                    <span class="text-sky-400 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="px-5 pb-4 pl-14 text-sm text-white/60">Absolutely. Cancel with one click and keep access until the end of your billing period.</p>
            </details>
            <details class="group border border-white/10 bg-white/5 transition hover:bg-white/10">
                <summary class="flex cursor-pointer items-center justify-between px-5 py-4 font-medium text-white/90">
                    <span class="flex items-center gap-3"><span class="text-sm font-bold text-sky-400">03</span>Do you offer annual billing?</span>
                    <span class="text-sky-400 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="px-5 pb-4 pl-14 text-sm text-white/60">Yes, annual billing saves 20% and includes priority support and advanced analytics.</p>
            </details>
            <details class="group border border-white/10 bg-white/5 transition hover:bg-white/10">
                <summary class="flex cursor-pointer items-center justify-between px-5 py-4 font-medium text-white/90">
                    <span class="flex items-center gap-3"><span class="text-sm font-bold text-sky-400">04</span>Is there a money-back guarantee?</span>
                    <span class="text-sky-400 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="px-5 pb-4 pl-14 text-sm text-white/60">30-day, no-questions-asked money-back guarantee on all paid plans.</p>
            </details>
        </div>
    </div>
</section>`,
    });
}
