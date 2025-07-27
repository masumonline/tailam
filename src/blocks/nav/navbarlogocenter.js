export default function addNavBarLogoCenter(bm) {
  bm.add("navbarlogocenter", {
    label: "Navbar Logo Center",
    category: "Tailwind Navbar",
    content: `<nav class="bg-sky-600 text-white">
  <div class="max-w-7xl mx-auto flex justify-between items-center px-4 h-16">
    <div class="flex space-x-4">
      <a href="#" class="hover:text-gray-300">Home</a>

      <div class="relative group">
        <span class="cursor-pointer hover:text-gray-300">Solutions</span>
        <div class="absolute left-0 mt-2 w-40 bg-white text-gray-900 rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
          <a href="#" class="block px-4 py-2 hover:bg-gray-100">CRM</a>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100">Analytics</a>
        </div>
      </div>
    </div>

    <div class="text-xl font-bold">MySite</div>

    <div class="flex space-x-4">
      <a href="#" class="hover:text-gray-300">Docs</a>
      <a href="#" class="hover:text-gray-300">Contact</a>
    </div>
  </div>
</nav>`,
    media: `<svg baseProfile="tiny" height="100" version="1.2" width="100"><defs />
    <rect fill="#0084d1" height="100" width="100" x="0" y="0" />
    <rect fill="#666" height="1" width="100" x="0" y="15" />
    <text fill="white" font-size="4px" x="5" y="10">menu</text>
    <text fill="white" font-size="4px" x="20" y="10">menu</text>
    <text fill="white" font-size="4px" x="50" y="10">O</text>
    <text fill="white" font-size="4px" x="65" y="10">menu</text>
    <text fill="white" font-size="4px" x="80" y="10">menu</text>
    </svg>`,
  });
}
