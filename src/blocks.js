export default (editor) => {
    const bm = editor.BlockManager;

    bm.add("tailwind-container", {
        label: "Container",
        category: "Tailwind",
        media: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        content: `<div class="container mx-auto p-4"></div>`,
    });

    bm.add("tailwind-nav1", {
        label: "Classic Navbar",
        category: "Tailwind",
        content: `<nav class="bg-blue-600 text-white">
                    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                    <div class="font-bold text-lg">MyBrand</div>
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
        media: `<img src="./img/small.jpg" style="width:124px;height:124px" />`,
    });

    bm.add("tailwind-nav2", {
        label: "Navbar Logo Center",
        category: "Tailwind",
        media: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="12" r="2" stroke="#1C274C" stroke-width="1.5"/><circle cx="12" cy="12" r="2" stroke="#1C274C" stroke-width="1.5"/><circle cx="19" cy="12" r="2" stroke="#1C274C" stroke-width="1.5"/></svg>`,
        content: `<nav class="bg-gray-800 text-white">
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
</nav>
`,
    });

    bm.add("tailwind-nav3", {
        label: "Navbar With Dropdown",
        category: "Tailwind",
        media: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56.381 19.9131H8.38098C7.85055 19.9131 7.34187 19.7024 6.9668 19.3273C6.59172 18.9522 6.38098 18.4435 6.38098 17.9131C6.38098 17.3827 6.59172 16.8739 6.9668 16.4989C7.34187 16.1238 7.85055 15.9131 8.38098 15.9131H56.381C56.9114 15.9131 57.4202 16.1238 57.7952 16.4989C58.1703 16.8739 58.381 17.3827 58.381 17.9131C58.381 18.4435 58.1703 18.9522 57.7952 19.3273C57.4202 19.7024 56.9114 19.9131 56.381 19.9131Z" fill="#999999"/><path d="M56.381 34.4651H8.38098C7.85055 34.4651 7.34187 34.2544 6.9668 33.8793C6.59172 33.5042 6.38098 32.9955 6.38098 32.4651C6.38098 31.9347 6.59172 31.4259 6.9668 31.0509C7.34187 30.6758 7.85055 30.4651 8.38098 30.4651H56.381C56.9114 30.4651 57.4202 30.6758 57.7952 31.0509C58.1703 31.4259 58.381 31.9347 58.381 32.4651C58.381 32.9955 58.1703 33.5042 57.7952 33.8793C57.4202 34.2544 56.9114 34.4651 56.381 34.4651Z" fill="#000000"/><path d="M56.381 48.7129H8.38098C7.85055 48.7129 7.34187 48.5022 6.9668 48.1271C6.59172 47.752 6.38098 47.2433 6.38098 46.7129C6.38098 46.1825 6.59172 45.6737 6.9668 45.2987C7.34187 44.9236 7.85055 44.7129 8.38098 44.7129H56.381C56.9114 44.7129 57.4202 44.9236 57.7952 45.2987C58.1703 45.6737 58.381 46.1825 58.381 46.7129C58.381 47.2433 58.1703 47.752 57.7952 48.1271C57.4202 48.5022 56.9114 48.7129 56.381 48.7129Z" fill="#999999"/></svg>`,
        content: `<nav class="bg-gray-800 text-white">
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

    bm.add("tailwind-nav4", {
        label: "Sidebar",
        category: "Tailwind",
        media: `
<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 viewBox="0 0 512 512"  xml:space="preserve">
<style type="text/css">
	.st0{fill:#000000;}
</style>
<g>
	<path class="st0" d="M40.252,14.489C18.019,14.489,0,32.507,0,54.741c0,22.233,18.019,40.252,40.252,40.252
		c22.225,0,40.252-18.019,40.252-40.252C80.504,32.507,62.477,14.489,40.252,14.489z"/>
	<rect x="148.122" y="14.489" class="st0" width="363.878" height="80.504"/>
	<path class="st0" d="M40.252,215.748C18.019,215.748,0,233.767,0,256c0,22.233,18.019,40.252,40.252,40.252
		c22.225,0,40.252-18.019,40.252-40.252C80.504,233.767,62.477,215.748,40.252,215.748z"/>
	<rect x="148.122" y="215.748" class="st0" width="363.878" height="80.504"/>
	<path class="st0" d="M40.252,417.007C18.019,417.007,0,435.026,0,457.259c0,22.232,18.019,40.252,40.252,40.252
		c22.225,0,40.252-18.019,40.252-40.252C80.504,435.026,62.477,417.007,40.252,417.007z"/>
	<rect x="148.122" y="417.007" class="st0" width="363.878" height="80.504"/>
</g>
</svg>`,
        content: `<aside class="w-64 h-screen bg-gray-900 text-white p-4 space-y-2">
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
};
