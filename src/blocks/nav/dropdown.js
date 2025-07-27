export default function addDropdown(bm) {
  bm.add("tailwind-nav3", {
    label: "Navbar With Dropdown",
    category: "Tailwind Navbar",
    media: `<svg baseProfile="tiny" height="100" version="1.2" width="100"><defs />
    <rect fill="#0092b8" height="100" width="100" x="0" y="0" />
    <rect fill="#666" height="1" width="100" x="0" y="15" />
    <text fill="white" font-size="6px" x="5" y="10">Logo</text>
    <text fill="white" font-size="4px" x="50" y="10">menu</text>
    <text fill="white" font-size="4px" x="65" y="10">menu</text>
    <text fill="white" font-size="4px" x="65" y="20">menu</text>
    <text fill="white" font-size="4px" x="65" y="30">menu</text>
    <text fill="white" font-size="4px" x="65" y="40">menu</text>
    <text fill="white" font-size="4px" x="80" y="10">menu</text>
    </svg>`,
    content: `<nav class="bg-cyan-600 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="#" class="text-xl font-bold">MySite</a>
      </div>

      <!-- Menu -->
      <div class="hidden md:flex space-x-4 items-center">
        <a href="#" class="hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>

        <!-- Dropdown -->
        <div class="relative group">
          <button class="px-3 py-2 rounded-md hover:bg-gray-700 inline-flex items-center">
            Services
            <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            class="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Web Design</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">SEO</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Marketing</a>
          </div>
        </div>

        <a href="#" class="hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
        <a href="#" class="hover:bg-gray-700 px-3 py-2 rounded-md">Contact</a>
      </div>

      <!-- Mobile hamburger -->
      <div class="md:hidden">
        <label for="menu-toggle" class="cursor-pointer">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <input type="checkbox" id="menu-toggle" class="hidden peer" />
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div class="md:hidden peer-checked:block hidden px-4 pb-4">
    <a href="#" class="block py-2">Home</a>
    <details class="group">
      <summary class="flex justify-between items-center cursor-pointer py-2">
        <span>Services</span>
        <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none"
          stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div class="pl-4">
        <a href="#" class="block py-1">Web Design</a>
        <a href="#" class="block py-1">SEO</a>
        <a href="#" class="block py-1">Marketing</a>
      </div>
    </details>
    <a href="#" class="block py-2">About</a>
    <a href="#" class="block py-2">Contact</a>
  </div>
</nav>
`,
  });

}
