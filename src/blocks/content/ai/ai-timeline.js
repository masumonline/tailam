export default function addAiTimeline(bm) {
    bm.add("ai-timeline", {
        label: "AI Roadmap",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#f43f5e"/><stop offset="1" stop-color="#a855f7"/></linearGradient></defs>
  <circle cx="6" cy="6" r="3" fill="#fff"/><circle cx="18" cy="12" r="3" fill="#fff"/><circle cx="6" cy="18" r="3" fill="#fff"/>
</svg>`,
        content: `<section class="bg-slate-50 py-16">
    <div class="mx-auto max-w-3xl px-6">
        <h2 class="mb-10 text-center text-3xl font-extrabold text-slate-900">AI Roadmap</h2>
        <ol class="relative border-l border-slate-200">
            <li class="mb-10 ml-6">
                <span class="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 ring-4 ring-white">✓</span>
                <div class="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                    <h3 class="font-bold text-emerald-700">Natural Chat GA</h3>
                    <p class="mt-1 text-sm text-slate-600">Conversational interface with streaming, memory, and tools.</p>
                    <span class="mt-2 inline-block text-xs font-semibold text-emerald-600">Shipped · Q1</span>
                </div>
            </li>
            <li class="mb-10 ml-6">
                <span class="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 ring-4 ring-white">✓</span>
                <div class="rounded-xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-bold text-amber-700">Vision & Image API</h3>
                    <p class="mt-1 text-sm text-slate-600">Multimodal understanding and generation endpoints.</p>
                    <span class="mt-2 inline-block text-xs font-semibold text-amber-600">Shipped · Q2</span>
                </div>
            </li>
            <li class="ml-6">
                <span class="absolute -left-3 flex h-6 w-6 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 ring-4 ring-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>
                </span>
                <div class="rounded-xl border border-fuchsia-200 bg-fuchsia-50 p-5">
                    <h3 class="font-bold text-fuchsia-700">Agent Orchestration</h3>
                    <p class="mt-1 text-sm text-slate-600">Multi-step autonomous agents with guardrails and observability.</p>
                    <span class="mt-2 inline-block text-xs font-semibold text-fuchsia-600">In development · Q4</span>
                </div>
            </li>
        </ol>
    </div>
</section>`,
    });
}
