export default function addHeaderwithLogo(bm) {
    bm.add("header_with_logo", {
        label: "Header With Logo",
        category: "Tailwind Navbar",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Header With Logo</div>`,
        content: ` <!-- Header Section -->
    <header
      class="relative bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white shadow-lg"
    >
      <div
        class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
      >
        <!-- Logo -->
        <a href="#" class="flex items-center space-x-2">
          <!-- Changed to a stable logo URL -->
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            class="h-10 w-10"
            alt="Logo"
          />
          <span class="text-2xl font-extrabold tracking-tight">CreativeCo</span>
        </a>

        <!-- Navigation -->
        <nav class="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" class="hover:text-yellow-300 transition">Home</a>
          <a href="#" class="hover:text-yellow-300 transition">Portfolio</a>
          <a href="#" class="hover:text-yellow-300 transition">Services</a>
          <a href="#" class="hover:text-yellow-300 transition">Contact</a>
        </nav>

        <!-- CTA -->
        <a
          href="#"
          class="hidden md:inline-block bg-white text-indigo-700 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 hover:text-black transition"
        >
          Get Started
        </a>

        <!-- Mobile Icon -->
        <div class="md:hidden">
          <button class="text-white focus:outline-none">
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>`,
    })
}
