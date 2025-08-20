export default function addFreshHeaderLogo(bm) {
    bm.add("fresh_header_with_inline_Logo", {
        label: "Fresh header with inline logo",
        category: "Tailwind Navbar",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Fresh header with inline logo</div>`,
        content: `<header class="bg-white shadow-md sticky top-0 z-50">
      <div
        class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
      >
        <!-- Inline SVG Logo + Brand Name -->
        <a href="#" class="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6l4 2"
            />
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
            />
          </svg>
          <span class="text-2xl font-bold text-gray-800 select-none"
            >NovaBrand</span
          >
        </a>

        <!-- Navigation Menu -->
        <nav class="hidden md:flex space-x-10 font-medium text-gray-700">
          <a href="#" class="hover:text-indigo-600 transition duration-200"
            >Dashboard</a
          >
          <a href="#" class="hover:text-indigo-600 transition duration-200"
            >Projects</a
          >
          <a href="#" class="hover:text-indigo-600 transition duration-200"
            >Team</a
          >
          <a href="#" class="hover:text-indigo-600 transition duration-200"
            >Calendar</a
          >
        </nav>

        <!-- Action Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <button
            class="px-4 py-2 rounded-md text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300"
          >
            Login
          </button>
          <button
            class="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
        </div>

        <!-- Mobile Menu Icon -->
        <div class="md:hidden">
          <button
            class="text-gray-700 focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              class="w-7 h-7"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>`,
    })
}
