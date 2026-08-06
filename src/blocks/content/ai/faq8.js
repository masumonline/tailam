export default function addFaq8(bm) {
    bm.add("faq8", {
        label: "Faq 8",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#4ade80"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs>
  <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.3" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17" r="1" fill="#fff"/>
</svg>`,
        content: `<section class="bg-gradient-to-b from-emerald-50 to-white py-16">
    <div class="mx-auto max-w-3xl px-6">
        <div class="mb-8 text-center">
            <h2 class="text-3xl font-extrabold text-slate-900">Frequently asked</h2>
            <p class="mt-2 text-slate-500">Pick a topic to jump in.</p>
        </div>
        <div class="mb-8 flex flex-wrap justify-center gap-2">
            <span class="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-1.5 text-sm font-semibold text-white">Getting started</span>
            <span class="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600">Billing</span>
            <span class="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600">Security</span>
            <span class="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600">Models</span>
        </div>
        <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <details class="group border-b border-slate-100" open>
                <summary class="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold text-slate-900">
                    How quickly can I go live?
                    <span class="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm text-emerald-600 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="px-6 pb-5 text-sm text-slate-600">Most teams ship a working integration in under an hour using our SDKs and the playground.</p>
            </details>
            <details class="group border-b border-slate-100">
                <summary class="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold text-slate-900">
                    Which SDKs do you offer?
                    <span class="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm text-emerald-600 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="px-6 pb-5 text-sm text-slate-600">Python, TypeScript/JavaScript, Go, and Java — plus a REST API and an OpenAI-compatible client.</p>
            </details>
            <details class="group border-b border-slate-100">
                <summary class="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold text-slate-900">
                    Do you support function calling?
                    <span class="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm text-emerald-600 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="px-6 pb-5 text-sm text-slate-600">Yes, with structured outputs, tool use, and parallel function calls on all chat models.</p>
            </details>
            <details class="group">
                <summary class="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold text-slate-900">
                    How do I get enterprise support?
                    <span class="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm text-emerald-600 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="px-6 pb-5 text-sm text-slate-600">Enterprise plans include a dedicated Slack channel, a solutions engineer, and a 2-hour response SLA.</p>
            </details>
        </div>
    </div>
</section>`,
    });
}
