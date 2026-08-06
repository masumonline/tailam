export default function addFaq10(bm) {
    bm.add("faq10", {
        label: "Faq 10",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#fb7185"/><stop offset="1" stop-color="#a855f7"/></linearGradient></defs>
  <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.3" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17" r="1" fill="#fff"/>
</svg>`,
        content: `<section class="bg-gradient-to-br from-rose-50 via-white to-violet-50 py-16">
    <div class="mx-auto max-w-5xl px-6">
        <div class="mb-10 text-center">
            <h2 class="text-3xl font-extrabold text-slate-900">FAQ — you asked, we answered</h2>
            <p class="mt-2 text-slate-500">Six of our most common questions.</p>
        </div>
        <div class="grid gap-5 md:grid-cols-2">
            <details class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg" open>
                <summary class="flex cursor-pointer items-start justify-between gap-4 font-semibold text-slate-900">
                    <span>Can I build agents on Tailam?</span>
                    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-violet-500 text-sm text-white transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">Yes — the Agent SDK handles tool calls, memory, and multi-step planning with full observability.</p>
            </details>
            <details class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
                <summary class="flex cursor-pointer items-start justify-between gap-4 font-semibold text-slate-900">
                    <span>How do I monitor costs?</span>
                    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-violet-500 text-sm text-white transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">Per-project budgets, alerts, and a live dashboard break costs down by model, endpoint, and team.</p>
            </details>
            <details class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
                <summary class="flex cursor-pointer items-start justify-between gap-4 font-semibold text-slate-900">
                    <span>What about versioning?</span>
                    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-violet-500 text-sm text-white transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">Model versions are pinned for 12 months, so your app never breaks when we ship improvements.</p>
            </details>
            <details class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
                <summary class="flex cursor-pointer items-start justify-between gap-4 font-semibold text-slate-900">
                    <span>Is there a rate-limit-free tier?</span>
                    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-violet-500 text-sm text-white transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">Enterprise plans remove rate limits entirely and support burst capacity for launch events.</p>
            </details>
            <details class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
                <summary class="flex cursor-pointer items-start justify-between gap-4 font-semibold text-slate-900">
                    <span>Can I run Tailam offline?</span>
                    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-violet-500 text-sm text-white transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">Yes — self-hosted and air-gapped deployments are available for regulated industries.</p>
            </details>
            <details class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
                <summary class="flex cursor-pointer items-start justify-between gap-4 font-semibold text-slate-900">
                    <span>How do I get help?</span>
                    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-violet-500 text-sm text-white transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">In-app chat, community forums, and a searchable docs site. Enterprise customers get a dedicated Slack channel.</p>
            </details>
        </div>
    </div>
</section>`,
    });
}
