export default function addFaq9(bm) {
    bm.add("faq9", {
        label: "Faq 9",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#a855f7"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs>
  <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.3" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17" r="1" fill="#fff"/>
</svg>`,
        content: `<section class="relative overflow-hidden bg-slate-950 py-16 text-white">
    <div class="absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"></div>
    <div class="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
    <div class="relative mx-auto max-w-3xl px-6">
        <div class="mb-10 text-center">
            <span class="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur">🤖 AI Support</span>
            <h2 class="mt-4 text-3xl font-extrabold sm:text-4xl">Questions, answered instantly</h2>
        </div>
        <div class="space-y-3">
            <details class="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10" open>
                <summary class="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                    <span>What makes Tailam different?</span>
                    <span class="text-lg text-violet-400 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-white/70">One API for chat, vision, audio, embeddings, and agents — with a playground, prompt library, and deployment baked in.</p>
            </details>
            <details class="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
                <summary class="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                    <span>Can I white-label the UI?</span>
                    <span class="text-lg text-violet-400 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-white/70">Yes — embeddable chat widgets are fully themeable and can live on your own domain with your branding.</p>
            </details>
            <details class="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
                <summary class="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                    <span>Is training data shared between customers?</span>
                    <span class="text-lg text-violet-400 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-white/70">Never. Every request is isolated, and enterprise models are provisioned on dedicated infrastructure.</p>
            </details>
            <details class="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
                <summary class="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                    <span>Can I export my data?</span>
                    <span class="text-lg text-violet-400 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="mt-3 text-sm leading-relaxed text-white/70">One-click export of prompts, logs, and fine-tunes in open formats, so you're never locked in.</p>
            </details>
        </div>
    </div>
</section>`,
    });
}
