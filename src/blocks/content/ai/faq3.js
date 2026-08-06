export default function addFaq3(bm) {
    bm.add("faq3", {
        label: "Faq 3",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#fbbf24"/><stop offset="1" stop-color="#fb7185"/></linearGradient></defs>
  <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.3" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17" r="1" fill="#fff"/>
</svg>`,
        content: `<section class="bg-gradient-to-b from-amber-50 to-rose-50 py-16">
    <div class="mx-auto max-w-5xl px-6">
        <div class="mb-10 text-center">
            <h2 class="text-3xl font-extrabold text-slate-900">Quick answers</h2>
            <p class="mt-2 text-slate-500">Tap a card to expand the answer.</p>
        </div>
        <div class="grid gap-5 sm:grid-cols-2">
            <details class="group rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg" open>
                <summary class="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900">
                    <span class="flex items-center gap-3"><span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 font-bold text-white">1</span>How do I get an API key?</span>
                    <span class="text-rose-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 pl-12 text-sm leading-relaxed text-slate-600">Sign up, open the dashboard, and hit "Create key". Keys are scoped to projects and rotate automatically.</p>
            </details>
            <details class="group rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg">
                <summary class="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900">
                    <span class="flex items-center gap-3"><span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 font-bold text-white">2</span>Is there a sandbox environment?</span>
                    <span class="text-rose-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 pl-12 text-sm leading-relaxed text-slate-600">Yes, every project gets a free sandbox environment with the same models and a lower rate limit.</p>
            </details>
            <details class="group rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg">
                <summary class="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900">
                    <span class="flex items-center gap-3"><span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 font-bold text-white">3</span>Do you store my prompts?</span>
                    <span class="text-rose-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 pl-12 text-sm leading-relaxed text-slate-600">Only for 30 days for abuse monitoring. Enable zero-retention mode for instant deletion of every request.</p>
            </details>
            <details class="group rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg">
                <summary class="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900">
                    <span class="flex items-center gap-3"><span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 font-bold text-white">4</span>What happens if I hit the limit?</span>
                    <span class="text-rose-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 pl-12 text-sm leading-relaxed text-slate-600">Requests are rejected with a 429 and you can set auto-scaling or hard caps in the billing settings.</p>
            </details>
        </div>
    </div>
</section>`,
    });
}
