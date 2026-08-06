export default function addFaq1(bm) {
    bm.add("faq1", {
        label: "Faq 1",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#a78bfa"/><stop offset="1" stop-color="#f472b6"/></linearGradient></defs>
  <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.3" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17" r="1" fill="#fff"/>
</svg>`,
        content: `<section class="bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-900 py-16 text-white">
    <div class="mx-auto max-w-3xl px-6">
        <div class="mb-10 text-center">
            <span class="rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur">FAQ</span>
            <h2 class="mt-3 text-3xl font-extrabold sm:text-4xl">Frequently asked questions</h2>
            <p class="mt-3 text-white/60">Everything you need to know about Tailam AI.</p>
        </div>
        <div class="space-y-3">
            <details class="group rounded-2xl bg-white/10 backdrop-blur" open>
                <summary class="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold">
                    What is Tailam AI?
                    <span class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white transition group-open:rotate-45">＋</span>
                </summary>
                <p class="px-6 pb-5 text-sm leading-relaxed text-white/70">Tailam AI is a developer platform for building AI-powered features with simple APIs, a playground, and ready-made prompts.</p>
            </details>
            <details class="group rounded-2xl bg-white/10 backdrop-blur">
                <summary class="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold">
                    How does pricing work?
                    <span class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white transition group-open:rotate-45">＋</span>
                </summary>
                <p class="px-6 pb-5 text-sm leading-relaxed text-white/70">You pay per token used. The free plan includes 100 requests per month, then plans start at $29 per month.</p>
            </details>
            <details class="group rounded-2xl bg-white/10 backdrop-blur">
                <summary class="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold">
                    Can I use my own models?
                    <span class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white transition group-open:rotate-45">＋</span>
                </summary>
                <p class="px-6 pb-5 text-sm leading-relaxed text-white/70">Yes. Enterprise plans support custom model deployments and bring-your-own-key for any OpenAI-compatible endpoint.</p>
            </details>
        </div>
    </div>
</section>`,
    });
}
