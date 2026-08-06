export default function addFaq5(bm) {
    bm.add("faq5", {
        label: "Faq 5",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#2dd4bf"/><stop offset="1" stop-color="#818cf8"/></linearGradient></defs>
  <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.3" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17" r="1" fill="#fff"/>
</svg>`,
        content: `<section class="bg-gradient-to-b from-white to-teal-50 py-16">
    <div class="mx-auto max-w-2xl px-6">
        <div class="mb-8 text-center">
            <span class="inline-block rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-sm font-bold uppercase tracking-wider text-transparent">FAQ</span>
            <h2 class="mt-2 text-3xl font-extrabold text-slate-900">Need a hand?</h2>
        </div>
        <div class="divide-y divide-slate-200">
            <details class="group py-5" open>
                <summary class="flex cursor-pointer items-center justify-between gap-6 font-semibold text-slate-900">
                    How do I migrate from another provider?
                    <span class="shrink-0 text-lg text-teal-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">Our migration CLI converts your prompts, keys, and usage history in under ten minutes. Most teams switch in an afternoon.</p>
            </details>
            <details class="group py-5">
                <summary class="flex cursor-pointer items-center justify-between gap-6 font-semibold text-slate-900">
                    Is the API OpenAI-compatible?
                    <span class="shrink-0 text-lg text-teal-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">Fully. Point your existing SDK at our base URL and you're done — no code changes needed.</p>
            </details>
            <details class="group py-5">
                <summary class="flex cursor-pointer items-center justify-between gap-6 font-semibold text-slate-900">
                    What latency can I expect?
                    <span class="shrink-0 text-lg text-teal-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">Median time-to-first-token is 120ms on Nova Flash, with streaming enabled by default.</p>
            </details>
            <details class="group py-5">
                <summary class="flex cursor-pointer items-center justify-between gap-6 font-semibold text-slate-900">
                    Where is data processed?
                    <span class="shrink-0 text-lg text-teal-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">US and EU regions with data residency guarantees. Choose your region per project.</p>
            </details>
        </div>
    </div>
</section>`,
    });
}
