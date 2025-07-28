export default function add7Card3(bm) {
  bm.add("card3", {
    label: "Card-3",
    category: "Tailwind Card",
    media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Card 3</div>`,
    content: ` <div class="max-w-sm bg-white border shadow-md overflow-hidden">
        <!-- Cover Photo -->
        <div class="h-32 bg-green-900"></div>

        <!-- Profile Picture -->
        <div class="flex justify-center -mt-12">
          <img
            class="w-32 h-32 rounded-full border-4 border-white object-cover"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400"
            alt="Profile"
          />
        </div>

        <!-- Name, Title, Bio -->
        <div class="text-center p-4">
          <h2 class="text-xl font-semibold text-gray-800">John Doe</h2>
          <p class="text-gray-500 text-sm">Full Stack Developer</p>
          <p class="mt-2 text-sm text-gray-600">
            Passionate about web technologies and open-source. React | Laravel |
            Node.js
          </p>

          <!-- Social Icons -->
          <div class="flex justify-center space-x-4 mt-4">
            <a href="#" class="text-gray-500 hover:text-blue-500">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 12a10 10 0 10-11 9.95V14.89h-2v-2.89h2V9.5c0-2 1.3-3.1 3.1-3.1.9 0 1.8.07 2 .1v2.3h-1.4c-1.1 0-1.3.5-1.3 1.3v1.7h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z"
                />
              </svg>
            </a>
            <a href="#" class="text-gray-500 hover:text-blue-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 3a4.48 4.48 0 00-4.5 4.5c0 .35.03.7.1 1.04A12.94 12.94 0 013 4.1a4.5 4.5 0 001.4 6A4.41 4.41 0 013 9.71v.06A4.5 4.5 0 007.5 14a4.52 4.52 0 01-2 .08A4.5 4.5 0 0012 17.5a9 9 0 01-5.5 1.9c-.35 0-.7-.02-1.05-.06A12.93 12.93 0 0012 21c7.5 0 11.6-6.2 11.6-11.6l-.01-.53A8.14 8.14 0 0023 3z"
                />
              </svg>
            </a>
            <a href="#" class="text-gray-500 hover:text-pink-500">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.6.3 1 .7 1.5 1.5.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.6-.7 1-1.5 1.5-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6-.6-.3-1-.7-1.5-1.5-.3-.5-.5-1.2-.6-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.6.7-1 1.5-1.5.5-.3 1.2-.5 2.4-.6 1.3-.1 1.7-.1 4.9-.1M12 0C8.7 0 8.3 0 7 0.1 5.7 0.2 4.8 0.5 4 1c-.9.4-1.6 1.1-2.1 2.1-.5.8-.8 1.7-1 3-.1 1.3-.1 1.7-.1 4.9s0 3.6.1 4.9c.1 1.3.5 2.2 1 3 .5.9 1.2 1.6 2.1 2.1.8.5 1.7.8 3 1 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.3-.1 2.2-.5 3-.9.9-.5 1.6-1.2 2.1-2.1.5-.8.8-1.7 1-3 .1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.3-.5-2.2-1-3-.5-.9-1.2-1.6-2.1-2.1-.8-.5-1.7-.8-3-.9C15.6 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.5a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"
                />
              </svg>
            </a>
          </div>

          <!-- Follow Button -->
          <button
            class="mt-4 bg-green-900 text-white px-4 py-2 hover:bg-green-800"
          >
            Follow
          </button>
        </div>
      </div>`,
  });
}
