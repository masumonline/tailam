export default function addAiBlog(bm) {
    bm.add("ai-blog", {
        label: "AI Blog Card",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#60a5fa"/><stop offset="1" stop-color="#c084fc"/></linearGradient></defs>
  <path d="M5 4h11l4 4v12H5V4Zm7 4h4v2h-4V8Zm0 4h5v2h-5v-2Zm-4-4h2v2H8V8Zm0 4h2v2H8v-2Zm0 4h9v2H8v-2Z" fill="#fff"/>
</svg>`,
        content: `<div class="max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-2xl">
    <div class="h-44 bg-gradient-to-br from-sky-500 via-violet-500 to-fuchsia-500"></div>
    <div class="p-6">
        <div class="flex items-center gap-2">
            <span class="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-xs font-bold text-white">AI Agents</span>
            <span class="text-xs text-slate-400">6 min read</span>
        </div>
        <h3 class="mt-3 text-lg font-bold leading-snug text-slate-900">Building reliable agents that never hallucinate</h3>
        <p class="mt-2 text-sm text-slate-600">Grounding, guardrails, and evaluation loops — a practical playbook for production agents.</p>
        <div class="mt-5 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-violet-500 text-xs font-bold text-white">AT</div>
                <span class="text-sm font-medium text-slate-700">Aria Torres</span>
            </div>
            <a href="#" class="text-sm font-semibold text-violet-600 transition hover:text-violet-800">Read →</a>
        </div>
    </div>
</div>`,
    });
}
