export default function add7Card10(bm) {
  bm.add("card10", {
    label: "Card-10",
    category: "Tailwind Card",
    media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Card 10</div>`,
    content: `<div class="bg-red-400 inline-block p-5"><div
        class="backdrop-blur-lg bg-white/30 border border-white/20 rounded-xl shadow-xl max-w-xs p-6 text-center"
      >
        <!-- Profile Image -->
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400"
          alt="Profile"
          class="w-28 h-28 rounded-full mx-auto border-4 border-white/30 shadow-lg mb-4"
        />

        <!-- Name -->
        <h2 class="text-2xl font-bold text-white mb-1">Alin Khan</h2>

        <!-- Title -->
        <p class="text-pink-100 text-sm mb-4">Creative Designer</p>

        <!-- Bio -->
        <p class="text-pink-50 text-sm mb-6">
          Passionate about crafting beautiful user experiences with modern tools
          and creativity.
        </p>

        <!-- Social Icons -->
        <div class="flex justify-center space-x-4 mb-6">
          <a href="#" class="text-white/70 hover:text-white">
            <!-- Twitter Icon -->
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 3 4.48 4.48 0 0012 7.5c0 .35.03.7.1 1.04A12.94 12.94 0 013 4.1a4.5 4.5 0 001.4 6A4.41 4.41 0 013 9.71v.06A4.5 4.5 0 007.5 14a4.52 4.52 0 01-2 .08A4.5 4.5 0 0012 17.5a9 9 0 01-5.5 1.9c-.35 0-.7-.02-1.05-.06A12.93 12.93 0 0012 21c7.5 0 11.6-6.2 11.6-11.6l-.01-.53A8.14 8.14 0 0023 3z"
              />
            </svg>
          </a>
          <a href="#" class="text-white/70 hover:text-white">
            <!-- Facebook Icon -->
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M22 12a10 10 0 10-11 9.95V14.89h-2v-2.89h2V9.5c0-2 1.3-3.1 3.1-3.1.9 0 1.8.07 2 .1v2.3h-1.4c-1.1 0-1.3.5-1.3 1.3v1.7h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z"
              />
            </svg>
          </a>
          <a href="#" class="text-white/70 hover:text-white">
            <!-- Instagram Icon -->
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.6.3 1 .7 1.5 1.5.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.6-.7 1-1.5 1.5-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6-.6-.3-1-.7-1.5-1.5-.3-.5-.5-1.2-.6-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.6.7-1 1.5-1.5.5-.3 1.2-.5 2.4-.6 1.3-.1 1.7-.1 4.9-.1M12 0C8.7 0 8.3 0 7 0.1 5.7 0.2 4.8 0.5 4 1c-.9.4-1.6 1.1-2.1 2.1-.5.8-.8 1.7-1 3-.1 1.3-.1 1.7-.1 4.9s0 3.6.1 4.9c.1 1.3.5 2.2 1 3 .5.9 1.2 1.6 2.1 2.1.8.5 1.7.8 3 1 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.3-.1 2.2-.5 3-.9.9-.5 1.6-1.2 2.1-2.1.5-.8.8-1.7 1-3 .1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.3-.5-2.2-1-3-.5-.9-1.2-1.6-2.1-2.1-.8-.5-1.7-.8-3-.9C15.6 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.5a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"
              />
            </svg>
          </a>
        </div>

        <!-- Button -->
        <button
          class="bg-white/20 hover:bg-white/40 text-white font-semibold px-4 py-2 rounded-full transition"
        >
          Follow
        </button>
      </div></div>`,
  });
}
