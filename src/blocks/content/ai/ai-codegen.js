export default function addAiCodegen(bm) {
    bm.add("ai-codegen", {
        label: "AI Code Editor",
        category: "AI Block",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="6" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#4ade80"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs>
  <path d="M8 7l-5 5 5 5m8-10l5 5-5 5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
        content: `<div class="max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-cyan-500/10">
    <div class="flex items-center justify-between border-b border-white/10 bg-slate-800/60 px-5 py-3">
        <div class="flex items-center gap-2">
            <span class="h-3 w-3 rounded-full bg-rose-500"></span>
            <span class="h-3 w-3 rounded-full bg-amber-500"></span>
            <span class="h-3 w-3 rounded-full bg-emerald-500"></span>
            <span class="ml-3 text-sm text-white/50">app.ts</span>
        </div>
        <span class="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-1 text-xs font-bold text-white">AI · Copilot</span>
    </div>
    <div class="space-y-3 p-5 font-mono text-sm">
        <p class="text-slate-400"><span class="text-fuchsia-400">const</span> <span class="text-cyan-300">summarize</span> <span class="text-slate-400">=</span> <span class="text-fuchsia-400">async</span> <span class="text-slate-400">(text) => {</span></p>
        <p class="pl-6 text-slate-400"><span class="text-fuchsia-400">const</span> ai <span class="text-slate-400">=</span> <span class="text-emerald-300">new</span> <span class="text-amber-300">Tailam</span>();</p>
        <p class="pl-6 text-slate-400"><span class="text-fuchsia-400">return</span> ai.<span class="text-cyan-300">complete</span>({</p>
        <p class="pl-10 text-slate-400">model: <span class="text-emerald-300">'gpt-4o'</span>,</p>
        <p class="pl-10 text-slate-400">prompt: <span class="text-emerald-300">\`Summarize:\n\${text}\`</span>,</p>
        <p class="pl-6 text-slate-400">});</p>
        <p class="text-slate-400">};</p>
        <div class="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-2.5 text-emerald-300">
            ✓ Autocompleted 3 lines · 42 tokens used
        </div>
    </div>
</div>`,
    });
}
