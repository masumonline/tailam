export default function addSidebar1(bm) {
  bm.add("tailwind-sidebar1", {
    label: "Sidebar 1",
    category: "Tailwind Sidebar",
    media: `<svg baseProfile="tiny" height="100" version="1.2" width="100"><defs />
    <rect fill="#d08700" height="100" width="40" x="0" y="0" />
    <text fill="white" font-size="8px" x="5" y="10">Logo</text>
    <text fill="white" font-size="5px" x="5" y="20">Menu</text>
    <text fill="white" font-size="5px" x="5" y="30">Menu</text>
    <text fill="white" font-size="5px" x="5" y="40">Menu</text>
    <text fill="white" font-size="5px" x="5" y="50">Menu</text>
    </svg>`,
    content: `<aside class="w-64 h-screen bg-yellow-600 text-white p-4 space-y-2">
  <a href="#" class="block py-2 px-3 rounded hover:bg-gray-700">Dashboard</a>
  <details class="group">
    <summary class="flex justify-between items-center cursor-pointer py-2 px-3 rounded hover:bg-gray-700">
      <span>Management</span>
      <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24">
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
    <div class="pl-6 text-sm">
      <a href="#" class="block py-1 hover:text-gray-400">Users</a>
      <a href="#" class="block py-1 hover:text-gray-400">Roles</a>
    </div>
  </details>

  <a href="#" class="block py-2 px-3 rounded hover:bg-gray-700">Reports</a>
</aside>`,
  });
}
