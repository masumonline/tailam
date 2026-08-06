export default function addAiPricing(bm) {
    bm.add("ai-pricing", {
        label: "AI Pricing Card",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#34d399"/><stop offset="1" stop-color="#0ea5e9"/></linearGradient></defs>
  <path d="M7 10V8a5 5 0 0 1 10 0v2h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1Zm2 0h6V8a3 3 0 0 0-6 0v2Z" fill="#fff"/>
</svg>`,
        content: `<section class="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-16 text-white">
    <div class="mx-auto max-w-6xl px-6">
        <div class="mb-12 text-center">
            <h2 class="text-3xl font-extrabold sm:text-4xl">
                Simple, <span class="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">scalable pricing</span>
            </h2>
            <p class="mt-4 text-white/60">Start free. Upgrade when your AI takes off.</p>
        </div>
        <div class="grid gap-6 lg:grid-cols-3">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:bg-white/10">
                <h3 class="text-lg font-semibold text-white/80">Starter</h3>
                <p class="mt-4 text-4xl font-extrabold">$0<span class="text-base font-medium text-white/50">/mo</span></p>
                <p class="mt-2 text-sm text-white/50">For side projects & tinkering</p>
                <ul class="mt-8 space-y-3 text-sm text-white/80">
                    <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> 100 requests / month</li>
                    <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Community support</li>
                    <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> GPT-4o mini access</li>
                </ul>
                <a href="#" class="mt-8 block rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-center font-semibold transition hover:bg-white/20">Start free</a>
            </div>
            <div class="relative rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-600 p-8 shadow-2xl shadow-emerald-500/30">
                <span class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-slate-900 shadow">MOST POPULAR</span>
                <h3 class="text-lg font-semibold text-white/90">Pro</h3>
                <p class="mt-4 text-4xl font-extrabold">$29<span class="text-base font-medium text-white/70">/mo</span></p>
                <p class="mt-2 text-sm text-white/70">For growing products</p>
                <ul class="mt-8 space-y-3 text-sm">
                    <li class="flex items-center gap-2"><span class="font-bold">✓</span> 10,000 requests / month</li>
                    <li class="flex items-center gap-2"><span class="font-bold">✓</span> Full model suite</li>
                    <li class="flex items-center gap-2"><span class="font-bold">✓</span> Priority support</li>
                    <li class="flex items-center gap-2"><span class="font-bold">✓</span> Analytics dashboard</li>
                </ul>
                <a href="#" class="mt-8 block rounded-xl bg-white px-6 py-3 text-center font-bold text-emerald-600 shadow-lg transition hover:bg-emerald-50">Get started</a>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:bg-white/10">
                <h3 class="text-lg font-semibold text-white/80">Enterprise</h3>
                <p class="mt-4 text-4xl font-extrabold">Custom</p>
                <p class="mt-2 text-sm text-white/50">For teams at scale</p>
                <ul class="mt-8 space-y-3 text-sm text-white/80">
                    <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Unlimited requests</li>
                    <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Dedicated infrastructure</li>
                    <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> SSO & VPC deployment</li>
                </ul>
                <a href="#" class="mt-8 block rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-center font-semibold transition hover:bg-white/20">Contact sales</a>
            </div>
        </div>
    </div>
</section>`,
    });
}
