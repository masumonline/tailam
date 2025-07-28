export default function add7Card8(bm) {
  bm.add("card8", {
    label: "Card-8",
    category: "Tailwind Card",
    media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Card 8</div>`,
    content: `<div class="bg-white max-w-lg w-full rounded-xl shadow-lg flex overflow-hidden">
      <!-- Left Sidebar (Profile Photo) -->
      <div class="bg-blue-600 flex items-center justify-center p-6">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400"
          alt="Profile"
          class="w-28 h-28 rounded-full border-4 border-white object-cover"
        />
      </div>

      <!-- Right Content -->
      <div class="flex-1 p-6">
        <!-- Name & Title -->
        <h2 class="text-2xl font-bold text-gray-800 mb-1">Alex Johnson</h2>
        <p class="text-sm text-gray-500 mb-4">Marketing Specialist</p>

        <!-- Bio -->
        <p class="text-gray-600 text-sm mb-4">
          Focused on driving results with creative campaigns and digital
          strategies. Coffee lover ☕
        </p>

        <!-- Socials -->
        <div class="flex space-x-3 mb-4">
          <a href="#" class="text-gray-400 hover:text-blue-600">
            <!-- LinkedIn -->
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.5-.7-1.5-1.5 0-.9.5-1.5 1.5-1.5s1.5.6 1.5 1.5c0 .8-.5 1.5-1.5 1.5zm13.5 11.3h-3v-5.4c0-1.3-.5-2.2-1.8-2.2-1 0-1.5.7-1.7 1.3-.1.2-.1.5-.1.8v5.5h-3v-10h3v1.4c.4-.6 1.1-1.4 2.7-1.4 2 0 3.5 1.3 3.5 4.1v5.9z"
              />
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-blue-400">
            <!-- Twitter -->
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 3 4.48 4.48 0 0012 7.5c0 .35.03.7.1 1.04A12.94 12.94 0 013 4.1a4.5 4.5 0 001.4 6A4.41 4.41 0 013 9.71v.06A4.5 4.5 0 007.5 14a4.52 4.52 0 01-2 .08A4.5 4.5 0 0012 17.5a9 9 0 01-5.5 1.9c-.35 0-.7-.02-1.05-.06A12.93 12.93 0 0012 21c7.5 0 11.6-6.2 11.6-11.6l-.01-.53A8.14 8.14 0 0023 3z"
              />
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-pink-600">
            <!-- Instagram -->
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.6.3 1 .7 1.5 1.5.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.6-.7 1-1.5 1.5-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6-.6-.3-1-.7-1.5-1.5-.3-.5-.5-1.2-.6-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.6.7-1 1.5-1.5.5-.3 1.2-.5 2.4-.6 1.3-.1 1.7-.1 4.9-.1M12 0C8.7 0 8.3 0 7 0.1 5.7 0.2 4.8 0.5 4 1c-.9.4-1.6 1.1-2.1 2.1-.5.8-.8 1.7-1 3-.1 1.3-.1 1.7-.1 4.9s0 3.6.1 4.9c.1 1.3.5 2.2 1 3 .5.9 1.2 1.6 2.1 2.1.8.5 1.7.8 3 1 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.3-.1 2.2-.5 3-.9.9-.5 1.6-1.2 2.1-2.1.5-.8.8-1.7 1-3 .1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.3-.5-2.2-1-3-.5-.9-1.2-1.6-2.1-2.1-.8-.5-1.7-.8-3-.9C15.6 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.5a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"
              />
            </svg>
          </a>
        </div>

        <!-- Button -->
        <button
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Connect
        </button>
      </div>
    </div>`,
  });
}
