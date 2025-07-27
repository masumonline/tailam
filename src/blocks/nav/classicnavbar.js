export default function addClassicNavBar(bm) {
  bm.add("classicnavbar1", {
    label: "Classic Navbar",
    category: "Tailwind Navbar",
    content: `<nav class="bg-indigo-950 text-white">
                    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                    <div class="font-bold text-lg chiness">MyBrand</div>
                    <div class="hidden md:flex space-x-4">
                        <a href="#" class="hover:underline">Home</a>
                    <div class="relative group">
                    <button class="hover:underline">Products</button>
                    <div class="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Laptops</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Phones</a>
                    </div>
                </div>
                <a href="#" class="hover:underline">About</a>
                    </div>
                </div>
            </nav>`,
    media: `<svg baseProfile="tiny" height="100" version="1.2" width="100"><defs />
    <rect fill="#1e1a4d" height="100" width="100" x="0" y="0" />
    <rect fill="#666" height="1" width="100" x="0" y="15" />
    <text fill="white" font-size="6px" x="5" y="10">Logo</text>
    <text fill="white" font-size="4px" x="50" y="10">menu</text>
    <text fill="white" font-size="4px" x="65" y="10">menu</text>
    <text fill="white" font-size="4px" x="80" y="10">menu</text>
    </svg>`,
  });
}
