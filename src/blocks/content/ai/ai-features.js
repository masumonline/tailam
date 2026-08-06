export default function addAiFeatures(bm) {
    bm.add("ai-features", {
        label: "AI Feature Grid",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#22d3ee"/><stop offset="1" stop-color="#a855f7"/></linearGradient></defs>
  <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4l-3 3-3-3H6a2 2 0 0 1-2-2V6Z" fill="#fff"/>
</svg>`,
        content: `<section class="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-16">
    <div class="mx-auto max-w-6xl px-6">
        <div class="mx-auto mb-12 max-w-2xl text-center">
            <span class="mb-3 inline-block rounded-full bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-sm font-bold text-transparent">
                EVERYTHING YOU NEED
            </span>
            <h2 class="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                One AI platform, endless superpowers
            </h2>
            <p class="mt-4 text-slate-600">
                Composable building blocks that plug into your stack in minutes.
            </p>
        </div>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div class="group rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 p-6 text-white shadow-xl shadow-rose-500/20 transition hover:-translate-y-1">
                <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l-5 5v-5Z"/>
                    </svg>
                </div>
                <h3 class="text-lg font-bold">Natural Chat</h3>
                <p class="mt-2 text-sm text-white/80">Human-like conversations with memory, tools, and your own data.</p>
            </div>
            <div class="group rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 p-6 text-white shadow-xl shadow-violet-500/20 transition hover:-translate-y-1">
                <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 13l2-2m0 0l2 2m-2-2v6m14-6l2-2m0 0l2 2m-2-2v6M7 19h10m-4-6a3 3 0 0 0-6 0v6h6v-6Z"/>
                    </svg>
                </div>
                <h3 class="text-lg font-bold">Vision & Image</h3>
                <p class="mt-2 text-sm text-white/80">Generate, edit, and understand images with multimodal models.</p>
            </div>
            <div class="group rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-600 p-6 text-white shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1">
                <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/>
                    </svg>
                </div>
                <h3 class="text-lg font-bold">Code Generation</h3>
                <p class="mt-2 text-sm text-white/80">Explain, refactor, and generate code across 40+ languages.</p>
            </div>
            <div class="group rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white shadow-xl shadow-emerald-500/20 transition hover:-translate-y-1">
                <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 5V5Z"/>
                    </svg>
                </div>
                <h3 class="text-lg font-bold">Document Q&A</h3>
                <p class="mt-2 text-sm text-white/80">Ask questions over PDFs, slides, and spreadsheets with citations.</p>
            </div>
            <div class="group rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white shadow-xl shadow-amber-500/20 transition hover:-translate-y-1">
                <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-6m0 0l4-4m-4 4l-2 2m18-8l-4-4m4 4l2-2m-2 2l-6 6-4-4-6 6m8 0h4"/>
                    </svg>
                </div>
                <h3 class="text-lg font-bold">Analytics & Insights</h3>
                <p class="mt-2 text-sm text-white/80">Turn raw usage data into actionable product intelligence.</p>
            </div>
            <div class="group rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 p-6 text-white shadow-xl shadow-fuchsia-500/20 transition hover:-translate-y-1">
                <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0 0v5m-3 1h6"/>
                    </svg>
                </div>
                <h3 class="text-lg font-bold">Enterprise Security</h3>
                <p class="mt-2 text-sm text-white/80">SOC 2, SSO, VPC deployment, and zero data retention.</p>
            </div>
        </div>
    </div>
</section>`,
    });
}
