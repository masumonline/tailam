export default function addAiFaq(bm) {
    bm.add("ai-faq", {
        label: "AI FAQ",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#a78bfa"/><stop offset="1" stop-color="#f472b6"/></linearGradient></defs>
  <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.3" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17" r="1" fill="#fff"/>
</svg>`,
        content: `<section class="bg-gradient-to-b from-slate-50 to-white py-16">
    <div class="mx-auto max-w-2xl px-6">
        <div class="mb-10 text-center">
            <span class="text-sm font-bold uppercase tracking-wider text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text">Questions</span>
            <h2 class="mt-2 text-3xl font-extrabold text-slate-900">AI, explained simply</h2>
        </div>
        <div class="space-y-4">
            <details class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" open>
                <summary class="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                    How does Tailam keep my data private?
                    <span class="text-violet-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">All prompts are encrypted in transit and at rest. Your data is never used for training, and you can enable zero-data-retention mode at any time.</p>
            </details>
            <details class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary class="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                    Which models are available?
                    <span class="text-violet-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">Nova Flash for low-latency, Nova Pro for balanced, and Nova Max for the highest reasoning quality. Swap models with a single parameter change.</p>
            </details>
            <details class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary class="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                    Can I self-host Tailam?
                    <span class="text-violet-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">Yes. Enterprise plans include VPC deployment with your own model weights, keys, and infrastructure.</p>
            </details>
            <details class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary class="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                    What is the rate limit on the free plan?
                    <span class="text-violet-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">100 requests per month at 3 requests per minute. Enough to prototype your idea before you scale.</p>
            </details>
        </div>
    </div>
</section>`,
    });
}
