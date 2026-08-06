export default function addFaq7(bm) {
    bm.add("faq7", {
        label: "Faq 7",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#22d3ee"/><stop offset="1" stop-color="#f472b6"/></linearGradient></defs>
  <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.3" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17" r="1" fill="#fff"/>
</svg>`,
        content: `<section class="bg-gradient-to-br from-cyan-900 via-slate-900 to-fuchsia-950 py-16 text-white">
    <div class="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-5">
        <div class="lg:col-span-2">
            <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-lg shadow-cyan-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l-5 5v-5Z"/></svg>
            </div>
            <h2 class="text-3xl font-extrabold">Still curious?</h2>
            <p class="mt-3 text-white/60">Our docs cover the rest in depth. Or ask the community.</p>
            <div class="mt-6 flex flex-col gap-3">
                <a href="#" class="rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-center font-semibold shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110">Read the docs</a>
                <a href="#" class="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-center font-semibold backdrop-blur transition hover:bg-white/20">Join the community</a>
            </div>
        </div>
        <div class="space-y-3 lg:col-span-3">
            <details class="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur" open>
                <summary class="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold">
                    Can I test models before paying?
                    <span class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="px-6 pb-5 text-sm text-white/70">Yes — the playground is free forever and includes every model. No card required to try them.</p>
            </details>
            <details class="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                <summary class="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold">
                    How is billing calculated?
                    <span class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="px-6 pb-5 text-sm text-white/70">Input and output tokens are billed separately per model. You'll see live usage in the dashboard.</p>
            </details>
            <details class="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                <summary class="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold">
                    What SLAs do you provide?
                    <span class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="px-6 pb-5 text-sm text-white/70">99.9% uptime on Pro and 99.99% on Enterprise, with credits issued automatically for downtime.</p>
            </details>
            <details class="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                <summary class="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold">
                    Do you have SOC 2?
                    <span class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p class="px-6 pb-5 text-sm text-white/70">Yes. SOC 2 Type II, GDPR, and HIPAA-ready on the enterprise tier. Reports available on request.</p>
            </details>
        </div>
    </div>
</section>`,
    });
}
