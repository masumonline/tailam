export default function addFaq6(bm) {
    bm.add("faq6", {
        label: "Faq 6",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#f472b6"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs>
  <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.3" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17" r="1" fill="#fff"/>
</svg>`,
        content: `<section class="bg-gradient-to-br from-pink-50 via-white to-amber-50 py-16">
    <div class="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-pink-500 to-amber-500 p-8 shadow-2xl shadow-pink-500/30 sm:p-12">
        <h2 class="text-3xl font-extrabold text-white">Got questions?</h2>
        <p class="mt-2 text-white/80">Here's what people ask us the most.</p>
        <div class="mt-8 space-y-3">
            <details class="group rounded-2xl bg-white/95 p-5 shadow-lg" open>
                <summary class="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                    Do you support streaming responses?
                    <span class="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-amber-500 text-sm text-white transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">Yes — every chat model streams tokens over SSE by default, with an option to return complete responses.</p>
            </details>
            <details class="group rounded-2xl bg-white/95 p-5 shadow-lg">
                <summary class="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                    Can I train custom embeddings?
                    <span class="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-amber-500 text-sm text-white transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">On the enterprise plan you can fine-tune embedding models on your domain for better retrieval accuracy.</p>
            </details>
            <details class="group rounded-2xl bg-white/95 p-5 shadow-lg">
                <summary class="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                    How do citations work in document Q&A?
                    <span class="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-amber-500 text-sm text-white transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">Answers reference the exact source chunks with page and line numbers, so you can verify every claim.</p>
            </details>
            <details class="group rounded-2xl bg-white/95 p-5 shadow-lg">
                <summary class="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                    What file formats are supported?
                    <span class="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-amber-500 text-sm text-white transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">PDF, DOCX, MD, XLSX, CSV, PPTX, and audio transcripts up to 50MB per file.</p>
            </details>
        </div>
    </div>
</section>`,
    });
}
